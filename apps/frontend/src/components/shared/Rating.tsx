import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"

export interface RatingProps {
    rating: number;
    size?: number;
}

export default function Rating(props: RatingProps) {
    function ratingToStars(rating: number) {
        const starts = []
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                starts.push(<IconStarFilled key={i} size={props.size ?? 12} />)
            } else if (rating >= i - 0.5) {
                starts.push(<IconStarHalfFilled key={i} size={props.size ?? 12} />)
            } else {
                starts.push(<IconStar key={i} size={props.size ?? 12} />)
            }
        }

        return starts
    }

    return <div className="flex gap-0 5 text-emerald-400">{ratingToStars(props.rating)}</div>
}