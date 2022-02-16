import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div className= "bg-gray-200 ">
      <nav className="border-b p-6  bg-gray-100 ">
        <p className="text-4xl flex mt-4  justify-center font-bold ">NFT Marketplace</p>
        <div className="flex mt-4  justify-center"><Link href="/"><a className="mr-4 text-blue-700">MarketPlace</a></Link>
          <Link href="/createNft"><a className="mr-4 text-blue-700">Create New NFT</a></Link>
          <Link href="/myCollection"><a className="mr-4 text-blue-700">My Collection</a></Link>
          <Link href="/myCreation"><a className="mr-4 text-blue-700">My Creations</a></Link>
        </div>
      </nav>
      <Component className="" {...pageProps} />
      
    </div>
  )
}

export default Marketplace