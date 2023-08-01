export interface LearningEntity {
  id: string | undefined,
  learningPassage: string,
  learningTerm: string,
  lastReviewed: string | undefined,
  reviewsCount: number | undefined,
  comment: string | undefined
}

export interface LearningEntitiesToday {
  duration: number,
  delay: number,
  learningEntities: LearningEntity[]
}
