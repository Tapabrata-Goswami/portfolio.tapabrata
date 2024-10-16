import './Heading.css'

function Heading({data}) {
    return (
      <div className='container'>
          <h2 className='page-heading'>{data.title}<span className='page-heading-dot'></span></h2>
      </div>
    )
}
export default Heading;