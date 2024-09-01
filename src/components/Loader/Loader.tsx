// PAGE STYLE
import './loader.scss'

const Loader = ({size = '54px', marginTop = '2rem', bg='#eab788'}) => {
    return (
        <div className="loader" style={{width:size, height:size, marginTop:marginTop }}>
            <div className="bar1" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar2" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar3" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar4" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar5" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar6" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar7" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar8" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar9" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar10" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar11" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div className="bar12" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
        </div>
    )
}

export default Loader