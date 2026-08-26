import { useState } from 'react'
import './Websites.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const toSite = (url) => ({ url, label: new URL(url).hostname.replace(/^www\./, '') })

const WEBSITE_CATEGORIES = {
    Shopify: [
        'https://cheechandchong.com/',
        'https://luv.health/',
        'https://aillio.com/',
        'https://tmgskin.com/',
        'https://www.urbanmonkey.com/',
        'https://www.anitadongre.com/',
        'https://aashniandco.com/',
        'https://onirest.com/',
        'https://drinkmaw.com/',
    ].map(toSite),
    WordPress: [
        'https://biopreventative.com/',
        'https://thecreativenext.com/dev/braininjuryinstitute/',
        'https://www.nexussupermarket.com/',
        'https://thecreativenext.com/dev/gabrossecurity/',
        'https://thecreativenext.com/dev/giwaagency/',
        'https://busy-do.com/',
        'https://thecreativenext.com/dev/cakesinheart/',
        'https://thecreativenext.com/dev/yellowstone/',
        'https://thecreativenext.com/dev/advancedesigncontractors/',
        'https://thecreativenext.com/dev/instantcontactbpo/',
    ].map(toSite),
    Truck: [
        'https://thecreativenext.com/dev/ibsta/',
    ].map(toSite),
    Food: [
        'https://festivalindia.com.au/',
    ].map(toSite),
    Custom: [
        'https://4mobility.com.au/',
        'https://glassyjunction.com.au/',
        'https://www.hupbo.com/',
        'https://www.obvious.ly/',
        'https://www.wearepeachy.com/',
        'https://www.thinkjuice.com/digital-marketing-agency-nyc-m/',
        'https://calo.app/en-ae',
        'https://kcallife.com/',
        'https://rightbite.com/en-ae/home',
        'https://www.tourmyindia.com/',
        'https://www.gtholidays.in/',
        'https://www.andluca.com/',
        'https://www.kingsmenbarbershop.in/',
        'https://459online.com/',
        'https://www.barbershoplounge.com/',
        'https://20thsalonandbarber.com/',
        'https://cleanwhale.pl/order',
    ].map(toSite),
    Photography: [
        'https://amvisuals.co/',
        'https://www.wildpinesphotographyoregon.com/',
        'https://www.runningwildstudio.com/',
        'https://www.michaelanthonyphotography.com/',
    ].map(toSite),
}

const CATEGORIES = Object.keys(WEBSITE_CATEGORIES)

function Websites() {
    const [activeCategory, updateActiveCategory] = useState(CATEGORIES[0])
    const [activeIndex, updateActiveIndex] = useState(0)

    const sites = WEBSITE_CATEGORIES[activeCategory]
    const activeSite = sites[activeIndex]

    const selectCategory = (category) => {
        updateActiveCategory(category)
        updateActiveIndex(0)
    }

    const goPrev = () => updateActiveIndex((i) => (i === 0 ? sites.length - 1 : i - 1))
    const goNext = () => updateActiveIndex((i) => (i === sites.length - 1 ? 0 : i + 1))

    return (
        <div className="container my-5" id="websites">
            <div className="websites-tabs">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`websites-tab-btn${category === activeCategory ? ' active' : ''}`}
                        onClick={() => selectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="websites-slider">
                <button type="button" className="websites-nav-btn" onClick={goPrev} aria-label="Previous site">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div className="websites-card">
                    <div className="websites-card-header">
                        <span className="websites-card-label">{activeSite.label}</span>
                        <a href={activeSite.url} target="_blank" rel="noreferrer" className="websites-visit-link">
                            Visit site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <iframe
                        key={activeSite.url}
                        src={activeSite.url}
                        title={activeSite.label}
                        loading="lazy"
                        className="websites-iframe"
                    />
                </div>

                <button type="button" className="websites-nav-btn" onClick={goNext} aria-label="Next site">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <p className="websites-counter">{activeIndex + 1} / {sites.length}</p>
        </div>
    )
}

export default Websites;
