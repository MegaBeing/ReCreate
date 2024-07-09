import test from "/test.pdf"
export default function Display()
{
    return (
        <div className="display">
            <embed src={test} type="application/pdf" width="50vw" height="100%" />
        </div>
    );

}