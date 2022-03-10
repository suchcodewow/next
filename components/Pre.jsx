export const Pre = ({children, ...props}) => {
    return {
      <pre {...props}>{children}<pre>
    }
  }