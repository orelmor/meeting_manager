class GroupModel{

    public groupCode:number
    public groupName:string


    //  For future creating new groups in the company
    public constructor(group:GroupModel){
        this.groupCode = group.groupCode
        this.groupName = group.groupName
    }
}

export default GroupModel