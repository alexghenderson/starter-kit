export default `
  type Query {
    loremIpsum(
      count: Int = 1,
      paragraphLowerBound: Int = 3,
      paragraphUpperBound: Int = 7,
      sentenceLowerBound: Int = 5,
      sentenceUpperBound: Int = 15,
      suffix: String = "\\n",
      units: String = "paragraphs"
    ): String!
  }
`;