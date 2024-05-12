import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className="padding-container max-container grid md:grid-cols-2 my-12 md:my-12 py-10 gap-4" id="contact">
        <div>
            <h5 className="text-xl font-bold text-[#03021e] my-2">Let's Connect</h5>
            <p className="text-[#03021e] mb-4 max-w-md">
                {" "}
                You can connect with us on any of our social media handles
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="/https://www.facebook.com/profile.php?id=100085733329393">
                    <Image 
                    src="/facebook.png" 
                    alt="Facebook Icon"
                    width={24}
                    height={24}
                    />
                </Link>
                <Link href="/https://www.instagram.com/autoroll.ng?igsh=Zjd2eTY2dW9pbXII&utm_source=qr">
                    <Image 
                    src="/instagram.png" 
                    alt="Instagram Icon"
                    width={24}
                    height={24}
                    />
                </Link>
                <Link href="/www.x.com/autoroll_ng">
                    <Image 
                    src="/twitter.png" 
                    alt="twitter Icon"
                    width={24}
                    height={24}
                    />
                </Link>
            </div>
        </div> 
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-[#03021e] block text-sm mb-2 font-medium">Your Email</label>
                    <input 
                        name="email"
                        type="email" 
                        id="email" 
                        required 
                        className="bg-[#9e1d20] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="youremail@gmail.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-[#03021e] block text-sm mb-2 font-medium">Subject</label>
                    <input 
                        name="subject"
                        type="text" 
                        id="subject" 
                        required 
                        className="bg-[#9e1d20] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="message" 
                    className="text-[#03021e] block text-sm mb-2 font-medium">
                    Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#9e1d20] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <button type="submit" className="bg-[#03021e] hover:bg-[#020b1e] text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection