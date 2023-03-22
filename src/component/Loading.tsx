



import { Loader, Placeholder } from "rsuite";

const Loading = () => (
    <>
    <Placeholder.Paragraph rows = {8}/>
    <Loader speed="slow" size="lg" center content="loading" />
    </>
)

export default Loading