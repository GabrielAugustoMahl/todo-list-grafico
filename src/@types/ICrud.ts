export interface ICrud<T> {
    insert(objeto: T): Promise<void>
    selectAll(): Promise<T[]>
    select(id: String) : Promise<T>
    update(objeto: T): Promise<void>
    delete(id: string): Promise<void>
}