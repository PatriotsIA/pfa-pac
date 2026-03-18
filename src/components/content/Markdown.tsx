import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import { cn } from '../../lib/cn'

const schema = {
  ...defaultSchema,
  attributes: {
    ...(defaultSchema.attributes ?? {}),
    a: [...((defaultSchema.attributes?.a as unknown[]) ?? []), ['target'], ['rel']],
  },
}

export function Markdown({ className, children }: { className?: string; children: string }) {
  return (
    <div className={cn('markdown', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeSanitize, schema]]}
        components={{
          a: (props) => (
            <a
              {...props}
              target={props.href?.startsWith('http') ? '_blank' : props.target}
              rel={props.href?.startsWith('http') ? 'noopener noreferrer' : props.rel}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

