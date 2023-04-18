import { data, people } from "../../../data";

const List = () => {
  return (
	<div>
		{
			people.map((person) => {
				const img = person.images?.[0]?.small?.url
				return (
					<div key={person.id}>
						{person.name}
						<img src={img} alt="" style={{width: '50px'}}/>
					</div>
				)
			} )
		}
	</div>
  )
}
export default List