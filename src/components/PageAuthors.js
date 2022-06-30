import React, { Fragment } from 'react'
import Navbar from './Navbar'

const PageAuthors = () => {
  const authors =[
    {"alt":"Nguyễn Trung Hiếu",    "title":"click to see informations",        
    "src":"https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/241966064_1719738094895177_6364275828077909770_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8A_uxBPY1-QAX9wbWet&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eTVi7kvwXPBtAH8oSiitKK3DBCtg0toTZmmlrEQTp4w&oe=62BF3EDB",
    "name":"Nguyễn Trung Hiếu",       "class":"22-5KB-C",              "phonenumber":"19052045",
    "gmail":"trunghieu.nguyen@unob.cz",           
    "facebook":"https://www.facebook.com/da.r.bou.3/",           
    "instagram":"https://www.instagram.com/hieudaren19/"},


    {"alt":"Nguyễn Hoàng Hoài Lâm",          "title":"click to see informations",        
     "src":"https://scontent-prg1-1.xx.fbcdn.net/v/t1.15752-9/289835338_3210061562572051_2334321692657237768_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TDJqOs5l_moAX-_F4Vq&_nc_ht=scontent-prg1-1.xx&oh=03_AVKSMyXj48wloidSp6wbd165d6f9pWUJ2ci6U6g81K3KoA&oe=62E4F709",
    "name":"Nguyễn Hoàng Hoài Lâm",          "class":"22-5KB-C",               "phonenumber":"0256987",
    "gmail":"hoanghoailam.nguyen@unob.cz",           
    "facebook":"https://www.facebook.com/lam.mun.79",          
    "instagram":"https://www.instagram.com/laam_mun/"},
  ]


  return (
    <Fragment>
        <Navbar/>
        <div style={{"border":"5px double black","display":"flex", "justify-content":"space-between","margin-top":"5%"}}>
            {authors.map((author)=>(<InforAuthor author={author}/>))}
        </div>
        
    </Fragment>
  )
}

const InforAuthor=({author})=>{

    return(
    <div style={{"display":"flex","width":"48%","border":"4px solid black","align-items": "center","justify-content": "center"}}>
        <div style={{"margin":"0 auto","width":"95%"}}>
           <img style={{"width":"100%","height":"1000px"}} className='anh1' alt={author.alt} tittle={author.tittle} src={author.src}></img>
        </div>
        
        <div style={{"margin":"0 auto","font-size":"25px"}}>
            <ul>
                <li><i className="bi bi-star-fill">Name:</i>{author.name}</li>
                <li><i className="bi bi-house">Class:</i>{author.class}</li>
                <li><i className="bi bi-telephone-fill">Phonenumber:</i>{author.phonenumber}</li>
                <li><i className="bi bi-envelope">Gmail:</i>{author.gmail}</li>
                <li><a href={author.facebook}><i className="bi bi-facebook">facebook</i></a></li>
                <li><a href={author.instagram}><i className="bi bi-instagram">instagram</i></a></li>
            </ul>
        </div>
    </div>
    )
}
export default PageAuthors
