import {Link} from "react-router";

function Beat({beat}){
    return (
        <article className="bg-opacity-90 bg-blue-700 p-2">

            <Link className="text-pink-400 text-2xl" to={`/beats/${beat.id}`}><h1 className="text-white">{beat.title}</h1></Link>
            <Link className="text-pink-400 text-lg" to={`/spots/${beat.id}`}>{beat.genre}</Link>
            <Link className="text-blue-400 text-lg" to={`/beats/${beat.id}/delete`}> Delete </Link>
            <Link className="text-blue-400 text-lg" to={`/beats/${beat.id}/edit`}>Edit</Link>
        </article>
    )
}

export default Beat;