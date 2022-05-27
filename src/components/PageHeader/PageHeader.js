import classes from './PageHeader.module.css'

const PageHeader = (props) => {
    return ( 
        <div className='text-3xl font-bold underline px-2'>
            <hr />
            <h1>{props.title}</h1>

        </div>
     );
}
 
export default PageHeader;