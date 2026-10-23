import Shot from './Shot.jsx'

/**
 * Products side by side, a column each: what the product does for the
 * client, a tag over it; a screenshot of it from media.js; its name, what it
 * does and a few words behind that. The columns share their rows, so like
 * parts start on one line. One marked `yours` is the client's next, still
 * open: dashed, its name in the accent where the rest stand.
 *
 * products: [{ id, tag, name, heading, body, media }
 *            | { id, tag, name, yours: true }]
 */
export default function Products({ products }) {
  return (
    <ul className="products" style={{ '--count': products.length }}>
      {products.map(({ id, tag, name, heading, body, media, yours }) => (
        <li className={`product${yours ? ' product--yours' : ''}`} key={id}>
          <p className="product__tag">{tag}</p>
          {yours ? (
            <p className="product__yours">{name}</p>
          ) : (
            <>
              <div className="product__shot">
                <Shot name={media} />
              </div>
              <p className="eyebrow product__name">{name}</p>
              <h3 className="product__heading">{heading}</h3>
              <p className="product__body">{body}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
