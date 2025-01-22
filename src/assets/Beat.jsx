import {Link} from "react-router";

function Beat({beat}){
    return (
        <article>
            <Link className="text-pink-400" to={`/beats/${beat.id}`}><h1 className="text-white">{beat.title}</h1></Link>
            <Link className="text-pink-400" to={`/spots/${beat.id}`}>{beat.genre}</Link>
            <Link className="text-gray-400" to={`/beats/${beat.id}/delete`}> Delete </Link>
            <Link className="text-gray-400" to={`/spots/${beat.id}/edit`}>Edit</Link>
        </article>
    )
}

export default Beat;