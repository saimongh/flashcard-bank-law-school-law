/* ─────────────────────────────────────────────────────────────
   FLASHCARD LIBRARY
   Edit this file to add / change / delete cards. index.html
   never needs to change.

   SUBJECT
     id:     short unique string (keeps "got it" progress)
     name:   shown in the header
     short:  optional tab label (falls back to name)
     cards:  list of cards ([] = shows "No cards yet")

   CARD  (only q is required; mix the back fields however you like)
     id:       unique within the subject (keeps "got it" progress)
     topic:    groups cards into the filter chips
     q:        front of the card
     tag:      optional small label on the front (defaults to topic)
     back:     optional label on the back (defaults to "Elements" for
               element-only cards, otherwise the topic)
     a:        main answer paragraph
     elements: numbered list. "Term — explanation" bolds the term
     more:     extra bullet lines (start a line with "  " to indent it)
     src:      optional footnote

   Basic HTML works anywhere: <em>case name</em>, <b>bold</b>.
   ───────────────────────────────────────────────────────────── */

window.LIBRARY = {
  subjects: [

    /* ═══════════════════════════ TORTS ═══════════════════════════ */
    {
      id: "torts", name: "Torts",
      cards: [
        {
          id: "battery", topic: "Intentional",
          q: "Battery",
          elements: [
            "Act",
            "Intent to cause a harmful or offensive contact (or imminent apprehension of one)",
            "Causation",
            "Harmful or offensive contact with P's person",
          ],
        },
        {
          id: "harmful-contact", topic: "Intentional", tag: "Battery · contact", back: "Definition",
          q: "Harmful contact",
          a: "Any physical impairment of the body: injury, pain, or illness.",
        },
        {
          id: "offensive-contact", topic: "Intentional", tag: "Battery · contact", back: "Definition",
          q: "Offensive contact",
          a: "Contact that offends a reasonable sense of personal dignity. Objective test, unless D knows of and exploits P's particular sensitivity.",
        },
         {
          id: "zone-of-personality", topic: "Intentional", tag: "Battery · contact", back: "Definition",
          q: "Zone of personality",
          a: "Anything that, if touched, violates P's reasonable sense of bodily integrity and dignity.",
          more: [
            "Test: was P physically connected to the object (wearing, holding, carrying, riding) when D touched it?",
            "Counts: clothes P has on, a plate in hand, a bag on P's shoulder, a cane, the horse P is riding.",
            "Doesn't count: the same bag set down across the room. That's trespass to chattels, not battery.",
            "Fisher v. Carrousel Motor Hotel: snatching a plate from P's hand is battery.",
          ],
          src: "Restatement (Second) of Torts § 18 cmt. c",
        },
        {
          id: "assault", topic: "Intentional",
          q: "Assault",
          elements: [
            "Act",
            "Intent to cause a harmful or offensive contact or imminent apprehension of one",
            "Causation",
            "P's reasonable apprehension",
            "Of an imminent harmful or offensive contact",
          ],
        },
        {
          id: "false-imprisonment", topic: "Intentional",
          q: "False imprisonment",
          elements: [
            "Act",
            "Intent to confine P within fixed boundaries",
            "Actual confinement (no reasonable means of escape)",
            "P aware of the confinement or harmed by it",
          ],
        },
        {
          id: "means-of-confinement", topic: "Intentional", tag: "False imprisonment · confinement", back: "Ways to confine",
          q: "Means of confinement",
          elements: [
            "Physical barriers — locked doors, a moving car",
            "Physical force — holding P",
            "Threat of immediate force — against P, P's family, or P's property",
            "Duress — e.g. withholding P's valuable property (a purse) so P won't leave",
            "Assertion of legal authority — P submits to a claimed right to hold P",
            "Failure to release — when D has a duty to let P go",
          ],
        },
        {
          id: "shopkeepers-privilege", topic: "Intentional", tag: "False imprisonment · exception",
          q: "Shopkeeper's privilege",
          elements: [
            "Reasonable grounds — reasonable belief P took or was taking goods without paying",
            "Reasonable manner — non-deadly force, no humiliation or excess threats",
            "Reasonable time — long enough to investigate or wait for police",
            "On or near the premises — in or right around the store",
          ],
        },
        {
          id: "iied", topic: "Intentional",
          q: "Intentional infliction of emotional distress",
          elements: [
            "Extreme and outrageous conduct",
            "Intent or recklessness",
            "Causation",
            "Severe emotional distress",
          ],
        },
        {
          id: "trespass-land", topic: "Intentional",
          q: "Trespass to land",
          elements: [
            "Intent to enter that land",
            "Physical entry",
            "Onto land in P's possession",
          ],
        },
        {
          id: "trespass-chattels", topic: "Intentional",
          q: "Trespass to chattels",
          elements: [
            "Intent",
            "Dispossession, or use of / intermeddling with P's chattel",
            "Actual damage",
          ],
        },
        {
          id: "conversion", topic: "Intentional",
          q: "Conversion",
          elements: [
            "Intent to exercise control over the chattel",
            "Serious interference (dominion or control) warranting full value",
            "P's right to possess the chattel",
          ],
        },
        {
          id: "citizens-arrest", topic: "Intentional", tag: "Defense",
          q: "Citizen's arrest",
          elements: [
            "Grounds — felony actually committed + reasonable belief P did it, or a breach-of-the-peace misdemeanor committed in the arrester's presence",
            "Reasonable force — only what's needed to make the arrest",
            "Prompt delivery — P turned over to police without unnecessary delay",
          ],
        },
        {
          id: "defense-of-others", topic: "Intentional", tag: "Defense",
          q: "Defense of others",
          elements: [
            "Reasonable belief — a third person faces imminent harmful or offensive contact",
            "Proportional force — only what D could use if D were the one threatened",
            "Ongoing threat — privilege ends once the danger is over",
          ],
        },
        {
          id: "consent", topic: "Intentional", tag: "Defense",
          q: "Consent",
          elements: [
            "Consent existed — express, or implied by conduct, custom, or law",
            "Capacity — P able to understand the nature of the conduct",
            "Not vitiated — no fraud as to essential nature, no duress, no mistake D knew of",
            "Within scope — D did what P agreed to, not more",
          ],
        },
        {
          id: "negligence", topic: "Unintentional",
          q: "Negligence",
          elements: [
            "Duty — D owed P a duty of reasonable care",
            "Breach — D failed to act as a reasonable person would",
            "Factual cause — D's breach actually caused P's harm",
            "Proximate (policy) cause — the harm was a foreseeable result of the breach",
            "Damages — P suffered actual harm",
          ],
        },
        {
          id: "duty-misfeasance", topic: "Unintentional", tag: "Negligence · duty", back: "Duty",
          q: "What satisfies duty if there's misfeasance?",
          a: "D's affirmative conduct created a risk of harm → ordinary duty of reasonable care.",
          more: [
            "Owed only to foreseeable plaintiffs: those in the zone of danger (<em>Palsgraf</em>).",
          ],
        },
        {
          id: "duty-nonfeasance", topic: "Unintentional", tag: "Negligence · duty", back: "Exceptions",
          q: "What satisfies duty if there's nonfeasance?",
          a: "No duty to act, unless:",
          elements: [
            "Special relationship — with P, or with a 3rd party D takes charge of and knows is dangerous",
            "D created the peril — D's own conduct put P in danger",
            "Voluntary undertaking — once D starts, D must act reasonably",
          ],
        },
        {
          id: "duty-premises", topic: "Unintentional", tag: "Negligence · duty", back: "Approaches",
          q: "What satisfies duty for premises liability?",
          a: "Universal duty (<em>Rowland</em>): reasonable care to all entrants. Or the tripartite approach:",
          elements: [
            "Invitee — reasonable care: inspect, repair, warn",
            "Licensee — warn of known hidden dangers",
            "Trespasser — no willful or wanton harm (exceptions: discovered trespassers, child trespassers)",
          ],
        },
        {
          id: "factual-cause", topic: "Unintentional", tag: "Negligence · causation", back: "Tests",
          q: "Factual cause",
          elements: [
            "But-for test — the default: without D's breach, would the harm have happened? If not, D is a factual cause",
            "Substantial factor — multiple causes, each enough on its own (two fires merge and burn P's house). Each is a cause even though neither is but-for",
            "Alternative liability — two negligent Ds, only one caused it, P can't tell which. Burden shifts to the Ds to prove they didn't",
            "Standard — P proves causation more likely than not",
          ],
        },
      ],
    },

    /* ═════════════════════════ PROPERTY ══════════════════════════ */
    {
      id: "property", name: "Property",
      cards: [
        {
          id: "ratione-soli", topic: "Possession",
          q: "What is <em>ratione soli</em>?",
          a: "Ownership by virtue of the soil: the owner of the land owns whatever is discovered on it, including wild animals.",
          more: [
            "One of the two routes to owning a wild animal. The other is first possession (manucapture, trapping, or a mortal wound without abandoning pursuit).",
            "Pierson: public beach, so no ratione soli for anyone. Keeble had it (his decoy pond).",
          ],
        },
        {
          id: "easement-discovery", topic: "Possession",
          q: "Who owns an item discovered on an easement?",
          a: "The landowner (the servient owner), not the person using the easement.",
          more: [
            "An easement is a use right, not possession. Being allowed to cross the land gives you no claim to what's in it.",
            "Railroad easement, gold under the tracks: the landowner owns the gold (ad coelum). The railroad only has the easement.",
          ],
        },
        {
          id: "rule", topic: "Rules & standards",
          q: "What is a rule? Give an example.",
          a: "A bright line set in advance. Quick and cheap to apply, but it can miss the important facts of a particular case.",
          more: [
            "Example: you must be 2 ft tall to ride.",
            "In the cases: Pierson's capture rule; prior appropriation (first in time).",
            "A good rule takes heavy up-front investment to design (Prof. Lee).",
          ],
        },
        {
          id: "standard", topic: "Rules & standards",
          q: "What is a standard? Give an example.",
          a: "A flexible test applied case by case, after the fact. It takes less information to create, but it's harder to apply quickly.",
          more: [
            "Example: drive at a safe speed.",
            "In the cases: Evans's reasonable use; Uston's reasonable access; Eyerman's public policy (the vaguest one in the course).",
            "Speed limits mix both: going 45 in a 50 can still be punished in bad weather.",
          ],
        },
        {
          id: "evans", topic: "Water",
          q: "What is the key takeaway of <em>Evans v. Merriweather</em>?",
          a: "Natural wants beat artificial wants.",
          more: [
            "Natural wants (drinking, household, livestock) come first and may use up the stream.",
            "Artificial wants (mills, comfort, prosperity) only get a reasonable, just share. The jury decides whether someone took too much.",
            "Evans's mill dam took more than his share in a drought: $150 to Merriweather.",
          ],
          src: "Ill. 1842 · reasonable use (riparian)",
        },
        {
          id: "coffin", topic: "Water",
          q: "What is the key takeaway of <em>Coffin v. Left Hand Ditch Co.</em>?",
          a: "Prior appropriation: first in time, first in right, and you may not exceed your initial use.",
          more: [
            "The use must be for a beneficial purpose.",
            "You can't take more than the original appropriation, even if your share leaves nothing downstream. Later users take what's left.",
            "Why Colorado rejects reasonable use: imperative necessity. The land is dry, so most of it is useless unless water is diverted to it, often far from the stream (farms, mines). Riparian rules only give water to land touching the stream, so they'd make settling the state impossible.",
            "  The settlers' custom was already first in time, and the Colorado constitution backs the right to divert unappropriated water.",
            "Facts: the ditch company diverted water out of the St. Vrain to farms in another watershed. In a drought, Coffin (riparian owners downstream) tore out its dam. The ditch company wins as the prior appropriator.",
          ],
          src: "Colo. 1882 · the Western alternative to Evans",
        },
        {
          id: "ease-prescription", topic: "Easements",
          q: "What creates an easement by <em>prescription</em>?",
          a: "Use that is open and notorious, continuous, and adverse (without permission) for the statutory period.",
          more: [
            "Some jurisdictions add a definite line of travel. Minor variations are fine; \"all over the place\" is not.",
            "No exclusivity required: it's a use right, so the elements describe use, not possession (unlike adverse possession).",
            "No compensation owed. No negative easements by prescription (no use to point to).",
            "Owner's defense: post a sign granting permission, so the use isn't adverse.",
          ],
          src: "Cal. driveway case (Warsaw v. Chicago Metallic Ceilings?) · 5-year period there",
        },
        {
          id: "ease-grant", topic: "Easements",
          q: "What creates an easement by <em>grant</em>?",
          a: "The owner expressly grants it, usually by selling it.",
          more: [
            "It's an interest in land, so it needs a deed in writing (Statute of Frauds; Wood v. Leadbitter).",
            "Paying for it is what separates an easement from a license.",
            "Record it in the county land office: record notice binds later owners. You can add terms (\"expires after 75 years\").",
            "Example: Baseball Publishing's sign on the wall, an easement in gross.",
          ],
        },
        {
          id: "ease-implication", topic: "Easements",
          q: "What creates an easement by <em>implication</em>?",
          a: "Land in common ownership is split, and there was (1) an obvious use before the split and (2) necessity: without the easement, you can't enjoy the land the way that kind of property is normally enjoyed.",
          more: [
            "Schwab v. Timmons: no obvious prior use, so no implied easement.",
            "Related: easement by necessity (sometimes called \"implied by necessity\"). A common owner splits the land and the severed part is landlocked at severance. It has to be strict necessity: hard or expensive access (a bluff, stairs) doesn't count.",
            "  Landlock yourself by selling the parcel with road access and you get nothing, unless you reserved an easement by grant (Schwab).",
            "  It ends when the necessity ends (a new road gets built).",
          ],
        },
        {
          id: "schwab", topic: "Easements",
          q: "What is the key takeaway of <em>Schwab v. Timmons</em>?",
          a: "An easement by necessity only runs in favor of the buyer (grantee) of the landlocked parcel, over the seller's (grantor's) retained land. A seller who landlocks the parcel they kept, by selling off their own road access, gets no easement.",
          more: [
            "Mere inconvenience or expense (like a bluff) doesn't make land landlocked. It has to be strict necessity, even if the other way out is steep or costly.",
            "Facts: the Schwabs' land sat between Green Bay and a bluff, and the road access had been conveyed away to relatives. A road up the bluff would have cost about $700,000. Still no easement.",
            "No easement by implication either: there was no obvious use before the split.",
          ],
          src: "Wis. 1999",
        },
       {
          id: "ease-estoppel", topic: "Easements",
          q: "What creates an easement by <em>estoppel</em>?",
          a: "Permission + substantial spending in reliance on it + the owner's knowledge and acquiescence. Revoking would be unjust, so equity won't let the owner revoke.",
          more: [
            "Starts out as a license, which is normally revocable. Estoppel turns it into an easement.",
            "The test is the owner's conduct, not whether the user was savvy: did the owner let someone invest heavily on the strength of the permission, then try to pull it?",
            "Holbrook v. Taylor: Holbrook let the Taylors use the road to build their $25,000 house, kept allowing it after, and let them widen and gravel it. About five years later he demanded a written agreement and blocked the road with a cable gate. Holbrook is estopped from revoking.",
            "Once it arises, it's generally treated like an easement on the land, so it can bind later owners (heirs, buyers), especially ones with notice.",
            "Sometimes called an \"irrevocable license,\" which makes no sense, since licenses are revocable.",
          ],
          src: "Ky. 1976",
        },
        {
          id: "shack", topic: "Right to exclude",
          q: "What is the key takeaway of <em>State v. Shack</em>?",
          a: "Property rights serve human values. Owning the land doesn't give you dominion over the people living on it.",
          more: [
            "A farmer can't bar government-funded aid workers (legal aid, health services) from reaching the migrant workers housed on his farm. The press counts too.",
            "Reasons: Carolene Products fn. 4 (migrants have no political or economic power); excluding aid would frustrate the federal statute; sic utere tuo.",
            "Trespass convictions reversed. The owner may still bar solicitors and peddlers \"for the present.\"",
          ],
          src: "N.J. 1971",
        },
        {
          id: "hinman", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Hinman v. Pacific Air Transport</em>?",
          a: "You don't own the sky. You have a right to use the airspace above your land, and a claim only to the extent you actually use it or someone interferes with your possession or beneficial use.",
          more: [
            "It makes ad coelum outdated and an inaccurate statement of actual law.",
            "Air, like the sea, can only be used, not dominated. Excluding planes would make every flight a trespass: \"utterly impracticable.\"",
            "Spite poles and a derrick in the flight path aren't \"use.\" They were later enjoined as a nuisance.",
          ],
          src: "9th Cir. 1936",
        },
        {
          id: "golden-press", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Golden Press v. Rylands</em>?",
          a: "Removal isn't automatic. A slight, good-faith encroachment whose removal would cause grave hardship gets damages, not an injunction.",
          more: [
            "Footings 2–3½ in. over the line, 7–9 ft underground; the strip was worth about $55.",
            "Balance of the equities / relative hardship: the court won't be \"a party to extortion.\"",
            "Bad faith (a deliberate taking) → removal regardless of cost.",
            "Rejects Pile v. Pedrick's automatic injunction. Today most courts follow Golden Press.",
          ],
          src: "Colo. 1951",
        },
        {
          id: "fixed-term", topic: "Easements",
          q: "Ordinarily, someone who wishes to grant, irrevocably for a fixed period of time, a right only to use the grantor's property in a certain way should grant:",
          a: "An easement.",
          more: [
            "License: revocable.",
            "Lease: transfers possession, not just a right to use.",
            "Bailment: temporary custody of personal property, not real property.",
            "Affirmative covenant: a promise to do something, not a right to use.",
          ],
        },
        {
          id: "ap-elements", topic: "Adverse possession",
          q: "What is required for a successful claim of ownership via adverse possession?",
          a: "Possession that is <b>actual</b>, <b>exclusive</b>, <b>open & notorious</b>, <b>continuous & uninterrupted</b>, and <b>adverse / hostile</b> under a claim of right, for the <b>statutory period</b>.",
          more: [
            "Continuous possession, NOT continuous use. AP is about possession: you can fence the land and never use it. Continuous use is what prescription requires, because an easement is a use right.",
            "  Continuity is measured by how a normal owner possesses that kind of property, so seasonal gaps are fine (Howard v. Kunto: summer cabin).",
            "State of mind splits: good faith required (Iowa, Carpenter); bad faith (Maine, basically dead); irrelevant (Connecticut, majority). A minority require color of title.",
            "Period: 5 to 40 years depending on state; NY is 10. Tacking requires privity.",
            "Doesn't run against the government. The clock pauses if the true owner was a minor, insane, or imprisoned when it began.",
          ],
        },
        {
          id: "continuous-continual", topic: "Adverse possession",
          q: "What is the difference between <em>continuous</em> and <em>continual</em>?",
          a: "Continuous = never stops. Continual = happens over and over, with breaks in between.",
          more: [
            "The AP element is \"continuous,\" but it's measured by ordinary use for that kind of property, so normal gaps (a summer-only cabin) don't break it.",
          ],
        },
        /* ── added from outline review (Nov 11) ── */
        {
          id: "license-types", topic: "Licenses",
          q: "Bare license vs. license coupled with a grant",
          a: "A bare license is revocable (standard law today). A license coupled with a grant is irrevocable, because you're estopped from defeating your own grant.",
          more: [
            "Estoppel: your word or act today stops you from doing the contrary later.",
            "Sofa example: A sells B a sofa, B pays and comes to pick it up. A can't revoke B's license to enter the apartment before B has a reasonable chance to retrieve it. Retrieval is part of what B bought.",
            "A license is a limit the owner puts on her own right to exclude. An easement is that limit made durable.",
          ],
        },
        {
          id: "wood-leadbitter", topic: "Licenses",
          q: "What is the key takeaway of <em>Wood v. Leadbitter</em>?",
          a: "A purchased race ticket is a bare license, so it can be revoked and reasonable force can be used to remove you.",
          more: [
            "A license coupled with a grant can't be revoked to defeat the grant. But an interest in land (like an easement) can only be created by deed. A ticket isn't a deed, so there's no grant.",
            "The ticket-holder's remedy, if any, is contract (breach), not tort.",
          ],
          src: "Exch. 1845",
        },
        {
          id: "bailment", topic: "Bailments",
          q: "Bailment",
          a: "A temporary transfer of possession or custody of personal property, not ownership.",
          more: [
            "Bailor gives (you, handing clothes to the dry cleaner). Bailee receives (the dry cleaner).",
            "Personal property only (chattels, movables), not real property.",
            "The question is always: what duty of care does the bailee owe the bailor if something goes wrong?",
            "A finder is a bailee for the true owner until the statute of limitations runs.",
          ],
        },
        {
          id: "bailee-duty", topic: "Bailments", back: "By who benefits",
          q: "Bailee's duty of care",
          elements: [
            "Sole benefit of bailor — slight diligence; liable only for gross negligence",
            "Both benefit (e.g. a paid dry cleaner) — ordinary diligence; liable for ordinary negligence",
            "Sole benefit of bailee — significant diligence; liable even for slight negligence",
          ],
          more: [
            "Parties may try to change this by agreement (coat-check signs, ticket disclaimers), but a disclaimer isn't effective unless it was actually brought to the bailor's attention (Allen).",
          ],
        },
        {
          id: "pocono-abandonment", topic: "Abandonment", back: "Elements",
          q: "What is required to abandon personal property?",
          elements: [
            "Voluntary relinquishment — owner gives up all right, title, claim and possession",
            "Intent to end ownership",
            "Not vesting it in anyone else",
            "Intent not to reclaim it",
          ],
          src: "Pocono Springs",
        },
        {
          id: "appurtenant-gross", topic: "Easements",
          q: "Easement appurtenant vs. in gross",
          a: "Appurtenant: the benefit attaches to a parcel. In gross: the benefit belongs to a specific person or company, with no dominant parcel.",
          more: [
            "Appurtenant: the benefited parcel is the dominant one, the burdened parcel is the servient one. Example: right of way across parcel 1 so parcel 2 can reach the road.",
            "In gross example: a billboard on someone's building.",
            "The burden ALWAYS runs with the servient land, appurtenant or in gross.",
            "Why it matters: transferability. Commercial easements in gross (billboard) transfer more easily than recreational ones (fishing).",
            "How to tell: intent of the parties, then whether it makes some land more valuable. If still unclear, courts find appurtenant.",
          ],
        },
        {
          id: "baseball-bruton", topic: "Easements",
          q: "What is the key takeaway of <em>Baseball Publishing Co. v. Bruton</em>?",
          a: "An exclusive right to keep a sign on a wall, for a limited purpose and not revocable at will, is an easement in gross. It's not a lease and not a license.",
          more: [
            "Not a lease: a lease transfers possession, and they had no possessory right to that part of the wall.",
            "Not a license: specific performance of a revocable permission would be pointless.",
            "In gross: the publisher profits from the sign space itself, not from any land the sign helps.",
            "Facts: $25 a year for a billboard; the owner started returning the checks and the sign came down.",
          ],
          src: "Mass. 1938",
        },
        {
          id: "easement-termination", topic: "Easements", back: "Ways",
          q: "How can an easement be terminated?",
          elements: [
            "Agreement — the preferred way",
            "Merger — one person comes to own both the dominant and servient parcels (a later buyer needs a new easement)",
            "Abandonment — nonuse alone isn't enough; need nonuse plus affirmative acts showing intent to abandon",
            "Necessity ends — an easement by necessity ends when the necessity does (a new road is built)",
            "Misuse — a court may terminate when use is more intensive or different than anticipated. Serving an additional parcel is automatically misuse",
          ],
          more: [
            "A fishing easement ends if the pond dries up and doesn't return if it refills. A pond that freezes each winter doesn't end it. You can't end it by drying up or filling in the pond on purpose.",
          ],
        },
        {
          id: "prescription-vs-ap", topic: "Easements",
          q: "Prescriptive easement vs. adverse possession",
          a: "Prescription creates a use right. Adverse possession transfers title. So prescription's elements describe use; AP's describe possession.",
          more: [
            "Prescription: open and notorious, continuous, adverse use for the statutory period (some states add a definite line of travel). No exclusivity, no compensation owed.",
            "AP: actual, exclusive, open and notorious, continuous and uninterrupted, adverse, for the statutory period.",
            "No negative easement by prescription (there's no use to point to).",
          ],
        },
        {
          id: "real-vs-es", topic: "Covenants",
          q: "Real covenant vs. equitable servitude",
          a: "The same kind of promise about land. The only difference is the remedy.",
          more: [
            "Real covenant → money damages. Equitable servitude → injunction.",
            "To tell which one: look at the remedy being sought.",
            "Both are created by agreement only, and both can run with the land (bind people who never signed).",
            "Equitable servitude rules are similar but less stringent (no privity).",
          ],
        },
        {
          id: "withn", topic: "Covenants", back: "Elements",
          q: "Requirements for the burden of a real covenant to run (WITHN)",
          elements: [
            "Writing — the original promise is in writing",
            "Intent — the original parties intended it to run",
            "Touch & concern — it affects the parties' legal relations as landowners",
            "Horizontal & vertical privity — A1–B1 succession of estate, and A1–A2 successor",
            "Notice — the burdened party had notice before acquiring (constructive notice works)",
          ],
          more: [
            "Benefit of a real covenant: same, except no horizontal privity and no notice.",
          ],
        },
        {
          id: "twines", topic: "Covenants", back: "Elements",
          q: "Requirements for the burden of an equitable servitude to run (TWINES)",
          elements: [
            "Writing — the original promise is in writing",
            "Intent — the original parties intended the burden to run",
            "Touch & concern — the subject matter affects landowners",
            "Notice — the burdened party had notice, to avoid unfairness",
          ],
          more: [
            "NO horizontal or vertical privity. That's why equitable servitudes run so much more easily.",
            "Benefit of an equitable servitude: same, minus notice.",
          ],
        },
        {
          id: "privity", topic: "Covenants", back: "Definitions",
          q: "Horizontal vs. vertical privity",
          elements: [
            "Horizontal — A1 and B1, the original parties: must be a succession of estate (landlord/tenant, grantor/grantee)",
            "Vertical — A1 and A2 (original owner and successor): a non-hostile nexus plus complete succession of the estate",
          ],
          more: [
            "Buying from A1 is fine. Acquiring by adverse possession: no vertical privity. Renting isn't complete succession (you don't own it).",
            "Complete succession is required for the burden, not the benefit.",
            "Only real covenants need privity. Equitable servitudes need neither.",
          ],
        },
        {
          id: "terminate-covenants", topic: "Covenants", back: "Ways",
          q: "How can a covenant be terminated?",
          elements: [
            "Agreement",
            "Built-in expiration date",
            "Changed circumstances — alone isn't enough; the covenant is unenforceable if the changes render it obsolete or useless, or make enforcement inequitable (Bolotin)",
            "Abandonment — widespread violations that erode the general plan, habitual and substantial (Peckham v. Milroy)",
          ],
        },
        {
          id: "pierson", topic: "Possession",
          q: "What is the key takeaway of <em>Pierson v. Post</em>?",
          a: "Chasing isn't catching. Pursuit alone gives no property in a wild animal.",
          more: [
            "Occupancy gets you ownership: manucapture (by hand), a mortal wound while in pursuit and not abandoning it, or nets/traps that take away natural liberty.",
            "Policy: a clear rule keeps the peace and keeps hunters out of court.",
            "No ratione soli for anyone, because the beach was public land.",
            "Facts: Post chased a fox with hounds. Pierson, knowing, killed it and carried it off. Pierson wins.",
          ],
          src: "N.Y. Sup. Ct. 1805",
        },
      ],
    },

    /* ══════════════════════ CRIMINAL LAW ═════════════════════════ */
    {
      id: "crim", name: "Criminal Law", short: "Crim",
      cards: [],
    },

    /* ═════════════════════ CIVIL PROCEDURE ═══════════════════════ */
    {
      id: "civpro", name: "Civil Procedure", short: "Civ Pro",
      cards: [],
    },

    /* ════════════════════════ CONTRACTS ══════════════════════════ */
    {
      id: "contracts", name: "Contracts",
      cards: [],
    },

  ],
};
