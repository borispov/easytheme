const headings = [ 
  "h1", "h2", "h3", "h4", "h5", "h6"
]

const headingComponents = {

  h1: ({ cx, children }) => <h1 className={cx}>{children}</h1>,
  h2: ({ cx, children }) => <h2 className={cx}>{children}</h2>,
  h3: ({ cx, children }) => <h3 className={cx}>{children}</h3>,
  h4: ({ cx, children }) => <h4 className={cx}>{children}</h4>,
  h5: ({ cx, children }) => <h5 className={cx}>{children}</h5>,
  h6: ({ cx, children }) => <h6 className={cx}>{children}</h6>,
}

export default ({ variant = 'h1', children, padding, margin, medium, bold, semiBold, italic, fontSize, color, other }) => {

  // Variant must be between h1-h6, if not default to h1
  const heading = headings.includes(variant) ? variant : 'h1'

  const classNames = [
    padding ?? 'p-0',
    margin ?? 'm-0',
    italic ? 'italic' : '',
    bold ? 'font-bold' : semiBold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal',
    fontSize ?? 'text-lg',
    color ?? 'text-primary',
    other ?? ''
  ]

  const CompHead = headingComponents[heading]

  return (
    <CompHead cx={classNames.join(' ')} children={children} />
  )
}
