export interface IProps { 
    request: boolean
    getAllList?(page:number): void
    list?: any
    handleSubmit?(values: object): any
}

export interface IStates {

}