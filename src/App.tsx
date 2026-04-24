import { useState } from 'react'
import { Phone, Mail, MapPin, X, Facebook } from 'lucide-react'
import './App.css'

export default function App() {
    const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)

    const imageBase = `${import.meta.env.BASE_URL}images/`
    const logoPath = `${imageBase}business_logo.jpg`
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100094896520175'

    const services = [
        'Calling Card',
        'Photo Printing',
        'Sticker Printing',
        'T-Shirt Printing',
        'Birthday and Wedding Invitations',
        'PVC ID',
        'Mugs (White, Frosted, Clear, and Beer Mug)',
        'Tote and Abaca Bag',
        'Canvass Wallet',
        'Mouse Pad',
        'Mug Coaster',
        'Writing Pads',
        'Notebooks',
        'Ref Magnets',
        'Other Souvenirs',
    ]

    const featuredPhotos = [
        'IMG_4047.jpg',
        'IMG_2164.jpg',
        'IMG_5516.jpg',
        'IMG_6364.jpg',
        'IMG_6247.jpg',
        'IMG_4094.jpg',
    ]

    const allPhotos = [
        'att.2zi-Irl6eX7K8j_6u7w4_b5x_sTX-QSVtoV4Mx477Rw.jpg',
        'att.CxXbr5lT4-vYFQN66i-_qd94fr01SrIP3kVm2sZm09w.jpg',
        'att.JWZ--YMYOadx5ibuvvilMtoC3bVXvhI8YiFHhrivhHc.jpg',
        'att.ZkascBQlHeN8ACzQWEu4-MxqwAMUYyYmXXMlRk-hn90.jpg',
        'IMG_0995.jpg',
        'IMG_1091.jpg',
        'IMG_1176.jpg',
        'IMG_1752.JPG',
        'IMG_2164.jpg',
        'IMG_2174.jpg',
        'IMG_2333.jpg',
        'IMG_2409.jpg',
        'IMG_3720.jpg',
        'IMG_3841.jpg',
        'IMG_3859.jpg',
        'IMG_4047.jpg',
        'IMG_4085.jpg',
        'IMG_4094.jpg',
        'IMG_4097.jpg',
        'IMG_4100.jpg',
        'IMG_5055.jpg',
        'IMG_5060.jpg',
        'IMG_5077.jpg',
        'IMG_5514.jpg',
        'IMG_5516.jpg',
        'IMG_6247.jpg',
        'IMG_6364.jpg',
        'IMG_9071.jpg',
        'IMG_9688.jpg',
    ]

    return (
        <main className="min-h-screen bg-[#ececec] p-3 pb-24 md:p-8 md:pb-8">
            <section className="z-40 mx-auto mb-3 max-w-6xl rounded-xl border-4 border-black bg-white p-3 md:sticky md:top-2 md:mb-5 md:p-4">
                <p className="mb-2 text-center text-xs font-extrabold uppercase tracking-wide text-black md:text-sm">
                    Message or Call Us Now for Fast Quotation
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-black md:grid-cols-4 md:text-sm">
                    <a href="tel:+639928118424" className="tap-card flex min-h-11 items-center gap-2 rounded-md border-2 border-black bg-[#ffe1eb] px-3 py-2 hover:bg-[#ffcedf]">
                        <Phone size={16} />
                        <span>(0992) 811 8424</span>
                    </a>
                    <a href="tel:+639065836947" className="tap-card flex min-h-11 items-center gap-2 rounded-md border-2 border-black bg-[#dff3fb] px-3 py-2 hover:bg-[#c9eafb]">
                        <Phone size={16} />
                        <span>+63 906 583 6947</span>
                    </a>
                    <a href="mailto:gxroseprints@gmail.com" className="tap-card col-span-2 flex min-h-11 items-center gap-2 rounded-md border-2 border-black bg-[#fff4bf] px-3 py-2 hover:bg-[#ffef9f] md:col-span-1">
                        <Mail size={16} />
                        <span className="truncate">gxroseprints@gmail.com</span>
                    </a>
                    <div className="col-span-2 flex min-h-11 items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 md:col-span-1">
                        <MapPin size={16} />
                        <span>Online Shop • PH</span>
                    </div>
                    <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="tap-card col-span-2 flex min-h-11 items-center gap-2 rounded-md border-2 border-black bg-[#dff3fb] px-3 py-2 hover:bg-[#c9eafb] md:col-span-4"
                    >
                        <Facebook size={16} />
                        <span>Facebook Page: Open Profile</span>
                    </a>
                </div>
            </section>

            <article className="animate-rise mx-auto max-w-6xl overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[0_14px_0_0_rgba(0,0,0,0.2)]">
                <div className="headline-accent h-3 w-full bg-gradient-to-r from-[#ff0f53] via-[#f2d447] to-[#6ec1e4]" />

                <section className="p-5 md:p-10">
                    <div className="grid gap-8 md:grid-cols-5 md:items-center">
                        <div className="md:col-span-3">
                            <p className="mb-3 inline-block rounded-sm border-2 border-black bg-[#f2d447] px-3 py-1 text-xs font-extrabold tracking-[0.2em] text-black">
                                ONLINE PAMPHLET
                            </p>
                            <h1 className="text-4xl font-black uppercase leading-[0.95] text-black md:text-7xl">GX ROSE PRINTS</h1>
                            <p className="mt-4 max-w-2xl text-sm font-medium text-neutral-700 md:text-lg">
                                Personalized prints and souvenirs for birthdays, weddings, school activities, business branding, and giveaways.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border-2 border-black bg-[#ff0f53] px-3 py-1 text-xs font-extrabold uppercase text-white">High Quality Print</span>
                                <span className="rounded-full border-2 border-black bg-[#6ec1e4] px-3 py-1 text-xs font-extrabold uppercase text-black">Bulk Order Discounts</span>
                                <span className="rounded-full border-2 border-black bg-[#f2d447] px-3 py-1 text-xs font-extrabold uppercase text-black">Full Customization</span>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="rounded-2xl border-4 border-black bg-white p-2">
                                <img src={logoPath} alt="GX Rose Prints business logo" className="h-auto w-full rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t-4 border-black bg-[#f7f7f7] p-5 md:p-10">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <h2 className="text-2xl font-black uppercase text-black md:text-4xl">Services Menu</h2>
                        <span className="rounded-sm border-2 border-black bg-[#ff0f53] px-2 py-1 text-xs font-bold text-white">No minimum on select products</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <li
                                key={service}
                                className={`tap-card rounded-md border-2 border-black px-3 py-2 font-semibold text-black ${index % 3 === 0 ? 'bg-[#ffe1eb]' : index % 3 === 1 ? 'bg-[#fff4bf]' : 'bg-[#dff3fb]'
                                    }`}
                            >
                                {service}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="border-t-4 border-black p-5 md:p-10">
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-black uppercase text-black md:text-4xl">Featured Works</h2>
                        <span className="rounded-full border-2 border-black bg-[#f2d447] px-3 py-1 text-xs font-extrabold text-black">Customer Proof</span>
                        <span className="rounded-full border-2 border-black bg-[#6ec1e4] px-3 py-1 text-xs font-extrabold text-black">Real Output</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {featuredPhotos.map((photo, index) => (
                            <figure
                                key={photo}
                                className={`image-tile overflow-hidden rounded-lg border-4 border-black bg-white ${index % 3 === 0 ? 'shadow-[6px_6px_0_0_#ff0f53]' : index % 3 === 1 ? 'shadow-[6px_6px_0_0_#f2d447]' : 'shadow-[6px_6px_0_0_#6ec1e4]'
                                    }`}
                            >
                                <button type="button" className="block w-full text-left" onClick={() => setPreviewPhoto(photo)}>
                                    <img
                                        src={`${imageBase}${photo}`}
                                        alt="Featured GX Rose Prints sample"
                                        className="h-44 w-full cursor-zoom-in object-cover md:h-56"
                                        loading="lazy"
                                    />
                                </button>
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="border-t-4 border-black bg-[#f7f7f7] p-5 md:p-10">
                    <h2 className="text-2xl font-black uppercase text-black md:text-4xl">Full Product Gallery</h2>
                    <p className="mt-2 text-sm font-medium text-neutral-700 md:text-base">
                        Mugs, magnets, tracing pads, keychains, gift boxes, and more. Scroll to explore all uploaded samples.
                    </p>

                    <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
                        {allPhotos.map((photo, index) => (
                            <figure
                                key={photo}
                                className={`image-tile mb-4 break-inside-avoid overflow-hidden rounded-md border-2 border-black bg-white ${index % 4 === 0
                                    ? 'shadow-[4px_4px_0_0_#ff0f53]'
                                    : index % 4 === 1
                                        ? 'shadow-[4px_4px_0_0_#f2d447]'
                                        : index % 4 === 2
                                            ? 'shadow-[4px_4px_0_0_#6ec1e4]'
                                            : 'shadow-[4px_4px_0_0_#000000]'
                                    }`}
                            >
                                <button type="button" className="block w-full text-left" onClick={() => setPreviewPhoto(photo)}>
                                    <img
                                        src={`${imageBase}${photo}`}
                                        alt="GX Rose Prints product sample"
                                        className="w-full cursor-zoom-in object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="grid border-t-4 border-black md:grid-cols-2">
                    <div className="tap-card border-b-4 border-black bg-[#dff3fb] p-5 md:border-b-0 md:border-r-4 md:p-10">
                        <h3 className="text-2xl font-black uppercase text-black">Why Customers Choose Us</h3>
                        <p className="mt-3 text-sm font-medium text-neutral-800 md:text-base">Clean print quality, bright colors, and tailored packages for every event size.</p>
                        <ul className="mt-4 space-y-2 text-sm font-semibold text-black md:text-base">
                            <li>- Personalized layouts and names</li>
                            <li>- Fast production timeline</li>
                            <li>- Bulk discounts for bigger orders</li>
                            <li>- Product and packaging customization</li>
                        </ul>
                    </div>

                    <div className="tap-card bg-[#fff4bf] p-5 md:p-10">
                        <h3 className="text-2xl font-black uppercase text-black">Contact and Inquiry</h3>
                        <p className="mt-3 text-sm font-medium text-neutral-800 md:text-base">Send us your peg, quantity, and date needed. We reply quickly.</p>

                        <div className="mt-5 grid gap-3">
                            <a href="tel:+639928118424" className="tap-card rounded-md border-2 border-black bg-white p-3 font-semibold text-black hover:bg-[#ffe1eb]">
                                <span className="flex items-center gap-2"><Phone size={16} /> (0992) 811 8424</span>
                            </a>
                            <a href="tel:+639065836947" className="tap-card rounded-md border-2 border-black bg-white p-3 font-semibold text-black hover:bg-[#dff3fb]">
                                <span className="flex items-center gap-2"><Phone size={16} /> +63 906 583 6947</span>
                            </a>
                            <a href="mailto:gxroseprints@gmail.com" className="tap-card rounded-md border-2 border-black bg-white p-3 font-semibold text-black hover:bg-[#fff4bf]">
                                <span className="flex items-center gap-2"><Mail size={16} /> gxroseprints@gmail.com</span>
                            </a>
                            <div className="rounded-md border-2 border-black bg-white p-3 font-semibold text-black">
                                <span className="flex items-center gap-2"><MapPin size={16} /> Online Shop - Philippines</span>
                            </div>
                            <a
                                href={facebookUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="tap-card rounded-md border-2 border-black bg-white p-3 font-semibold text-black hover:bg-[#dff3fb]"
                            >
                                <span className="flex items-center gap-2"><Facebook size={16} /> Open Facebook Profile</span>
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="border-t-4 border-black bg-black px-5 py-4 text-center md:px-10">
                    <p className="text-sm font-bold uppercase tracking-wide text-white">GX Rose Prints • Custom Printing and Souvenirs</p>
                </footer>
            </article>

            {previewPhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setPreviewPhoto(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image preview"
                >
                    <div className="relative max-h-[92vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="absolute right-2 top-2 rounded-full border-2 border-white bg-black/70 p-2 text-white"
                            onClick={() => setPreviewPhoto(null)}
                            aria-label="Close image preview"
                        >
                            <X size={20} />
                        </button>
                        <img
                            src={`${imageBase}${previewPhoto}`}
                            alt="GX Rose Prints product enlarged preview"
                            className="max-h-[92vh] w-full rounded-lg border-2 border-white object-contain"
                        />
                    </div>
                </div>
            )}

            <div className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-black bg-white p-2 md:hidden">
                <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
                    <a href="tel:+639928118424" className="tap-card flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#ffe1eb] px-2 py-2 text-xs font-extrabold text-black">
                        <Phone size={15} /> Call
                    </a>
                    <a href={facebookUrl} target="_blank" rel="noreferrer" className="tap-card flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#dff3fb] px-2 py-2 text-xs font-extrabold text-black">
                        <Facebook size={15} /> Facebook
                    </a>
                    <a href="mailto:gxroseprints@gmail.com" className="tap-card flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#fff4bf] px-2 py-2 text-xs font-extrabold text-black">
                        <Mail size={15} /> Email
                    </a>
                </div>
            </div>
        </main>
    )
}
