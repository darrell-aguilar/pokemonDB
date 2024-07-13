import "./Loader.scss"

type LoaderProps = {
  height?: string
  width?: string
}

export function Loader({ height = "100vh", width = "100%" }: LoaderProps) {
  const styles = {
    height,
    width,
  }

  return (
    <div className="loader" style={styles}>
      <div className="loader__component"></div>
    </div>
  )
}
