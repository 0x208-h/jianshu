
export type ActionType = {
  type: string
  payload?: any
}

export type TopicListTypes = {
  id: number
  title: string
}

export type ArticleList = {
  id: number
  title: string
  desc: string
  imgUrl: string
}

export type StateTypes = {
  topicList: TopicListTypes[]
  articleList: ArticleList[]
  showScroll: boolean
}