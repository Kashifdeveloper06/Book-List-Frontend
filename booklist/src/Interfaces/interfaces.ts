type BookData = {
  id: string;
  title: string;
  discount: string,
  price: string,
  img: string,
  description: string
};

type IBookCard = {
  navigateFunction: () => void,
  item: BookData
}
type ISubComment = {
  image: string,
  title: string
  verified: boolean,
  message: string,
}
export { BookData, IBookCard, ISubComment }