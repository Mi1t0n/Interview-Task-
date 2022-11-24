export enum TodoStatus {
    done='Done',
    inprogress='In Process',
    expired='Expired'
}

type TrefetchProp = {refetch:()=>void}

export type {TrefetchProp}