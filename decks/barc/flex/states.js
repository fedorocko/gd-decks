/**
 * What the schema (components/Flex.jsx) shows on each slide of its run, from
 * slide 24 on: one step per slide, in order. Each step says only what changes
 * from the one before; a part no step has shown yet, or one a step sets
 * 'off', is hidden. Going from one slide to the next, parts fade in and out
 * and change colour where they stand.
 *
 * Tones: 'plain', in paper; 'risk', in red — what it costs or exposes;
 * 'safe', in the accent — what makes it fit for production; 'dim', faded
 * back; 'off', hidden. The runs keep their own colours and take 'on' or 'dim'.
 *
 * The parts, by id (flex/layout.js):
 *   loop, loop.name          the decagon, and its name inside it
 *   loop.below               the word under that name
 *   evaluation               the box over the loop
 *   observability            the box under it
 *   chat, conversation
 *   skills, systemPrompt, memory, metadata
 *   governance               the frame round those four, and its name
 *   inference, localLlm, llm
 *   files, deployedApp
 *   dataAccelerator, data    data is the box named DWH
 *   sandboxedApi, computer
 *   <box>.above, <box>.below the words over and under a box
 *   governed.above, governed.below
 *                            those over and under the four governed boxes
 *   boundary                 the line the LLM stands beyond
 *   run.context, run.inference, run.tools
 *                            the runs along the loop's sides, and the key
 *
 * The lines are not parts of their own. A side's line runs from the loop to
 * the first box down it that shows, under any still hidden on the way, and
 * fades with that box; a side's run shows while any box down its line does.
 * The evaluation's and the observability's lines show with them, and the
 * sandbox's arrow up to the accelerator while both of them do.
 */

/** Each of `ids` in one tone. */
const all = (ids, tone) => Object.fromEntries(ids.map((id) => [id, tone]))

/** The words over and under each of `ids`, in one tone. */
const wordsOf = (ids, tone) => all(ids.flatMap((id) => [`${id}.above`, `${id}.below`]), tone)

/** A box, or each of a list of them, and the words over and under it, in one tone. */
const named = (ids, tone) => ({ ...all([ids].flat(), tone), ...wordsOf([ids].flat(), tone) })

const GOVERNED = ['skills', 'systemPrompt', 'memory', 'metadata']

/** The four governed boxes, and the words over and under them as one, in one tone. */
const governed = (tone) => ({ ...all(GOVERNED, tone), ...wordsOf(['governed'], tone) })

const STEPS = [
  // Built up, all in white.
  ['loop', { loop: 'plain' }],
  [
    'context',
    {
      ...all(['chat', 'conversation', 'skills', 'systemPrompt', 'memory'], 'plain'),
      'run.context': 'on',
    },
  ],
  // The LLM, straight from the loop: inference and the local LLM come later.
  ['llm', { llm: 'plain', boundary: 'plain', 'run.inference': 'on' }],
  ['tools', { ...all(['metadata', 'data', 'computer'], 'plain'), 'run.tools': 'on' }],
  ['files', { files: 'plain' }],
  ['named', { 'loop.name': 'plain' }],

  // What each costs or exposes.
  ['llmRisk', named('llm', 'risk')],
  ['dataRisk', named('data', 'risk')],
  ['computerRisk', named('computer', 'risk')],
  ['filesRisk', named('files', 'risk')],
  ['governedRisk', governed('risk')],
  ['loopRisk', { loop: 'risk', 'loop.below': 'risk' }],

  // How each is made fit for production, one line at a time: all but the
  // loop, the line to the LLM and the boundary it crosses faded back first.
  [
    'llmFocus',
    {
      ...all(['chat', 'conversation'], 'dim'),
      ...all(['run.context', 'run.inference', 'run.tools'], 'dim'),
      ...named(['files', 'data', 'computer'], 'dim'),
      ...governed('dim'),
    },
  ],
  ['localLlm', { ...named('localLlm', 'safe'), ...named('llm', 'dim') }],
  ['inference', named('inference', 'safe')],
  ['dataFocus', named('data', 'risk')],
  [
    'dataAccelerator',
    { ...named('dataAccelerator', 'safe'), data: 'plain', ...wordsOf(['data'], 'off') },
  ],
  ['computerFocus', named('computer', 'risk')],
  ['sandboxedApi', { ...named('sandboxedApi', 'safe'), ...named('computer', 'dim') }],
  ['filesFocus', named('files', 'risk')],
  [
    'deployedApp',
    { ...named('deployedApp', 'safe'), files: 'plain', ...wordsOf(['files'], 'off') },
  ],
  ['governedFocus', governed('risk')],
  ['governance', { governance: 'safe', ...all(GOVERNED, 'plain'), ...wordsOf(['governed'], 'off') }],
  [
    'evaluation',
    { evaluation: 'safe', observability: 'safe', loop: 'plain', 'loop.below': 'off' },
  ],
]

/** The steps' names, in order: one slide each. */
export const RUN = STEPS.map(([name]) => name)

// The schema's titles, one to each part of the run: how it is built up,
// what each part costs or exposes, and how each is made fit for production.
// Each holds from the step it is given at until the next is.
const TITLED = {
  loop: 'How does Claude enable absolute flexibility?',
  llmRisk: 'What challenges does it pose for regulated companies?',
  llmFocus: 'How to address them without sacrificing the benefits?',
}

/** Each step's title, by its name. */
let title
export const TITLES = Object.fromEntries(
  RUN.map((name) => {
    title = TITLED[name] ?? title
    return [name, title]
  }),
)

// Each step's state is the one before with its changes, less what is off.
let tones = {}
const states = Object.fromEntries(
  STEPS.map(([name, changes]) => {
    tones = Object.fromEntries(
      Object.entries({ ...tones, ...changes }).filter(([, tone]) => tone !== 'off'),
    )
    return [name, tones]
  }),
)

export default states
