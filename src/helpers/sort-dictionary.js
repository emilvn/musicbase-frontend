export const sortDictionary = {
	"name":{
		propertyName: "name",
		sortAscending: (a,b) => a.item.name.localeCompare(b.item.name),
		sortDescending: (a,b) => b.item.name.localeCompare(a.item.name)
	}
}