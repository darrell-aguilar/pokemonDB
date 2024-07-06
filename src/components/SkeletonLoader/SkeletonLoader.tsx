import "./SkeletonLoader.scss"

type SkeletonLoaderProps = {
  height?: string
  width?: string
  count?: number
}

export function SkeletonLoader({
  width = "250px",
  height = "300px",
  count = 1,
}: SkeletonLoaderProps) {
  const style = { width, height }

  if (count > 1) {
    return (
      <div className="skeleton_container">
        {Array.from(Array(count)).map((c, idx) => (
          <div className="skeleton_loader" key={idx} style={style}></div>
        ))}
      </div>
    )
  }

  return <div className="skeleton_loader" style={style}></div>
}
