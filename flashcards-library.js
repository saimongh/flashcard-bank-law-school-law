/* ─────────────────────────────────────────────────────────────
   FLASHCARD LIBRARY
   Edit this file to add / change / delete cards. flashcards.html
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
          a: "Anything so closely connected to P's body that touching it counts as touching P: clothing, a plate in hand, a bag being carried, the chair or horse P is on.",
        },
        {
          id: "instrumentality", topic: "Intentional", tag: "Battery · contact", back: "Definition",
          q: "Instrumentality",
          a: "No body-to-body touch needed. D makes contact through an object or force D sets in motion: a thrown rock, a weapon, poison, smoke blown in P's face, a pulled-out chair, a dog sicced on P.",
        },
        {
          id: "assault", topic: "Intentional",
          q: "Assault",
          elements: [
            "Act",
            "Intent to cause a harmful or offensive contact or imminent apprehension of one",
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
            "Practice Q1: Louis crosses a private beach on a public easement and opens an oyster. The pearl goes to Carpenter, the beach owner (ratione soli). And it was discovered, not found.",
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
            "Practice Q2: compared to rules, standards commonly require less information to create.",
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
            "Colorado rejects reasonable use because of imperative necessity: it's very dry.",
            "Practice Q3 (E) trap: \"first to use, not exceeding initial use\" is prior appropriation. Wrong case under Evans.",
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
            "Practice Q4: six months of walking to the lake is nowhere near the statutory period.",
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
          id: "ease-estoppel", topic: "Easements",
          q: "What creates an easement by <em>estoppel</em>?",
          a: "Permission + a reasonable expectation that it will continue + detrimental reliance (spending money because of it).",
          more: [
            "Holbrook v. Taylor: Taylor built a home relying on permission to use the road. Holbrook is estopped from revoking.",
            "Starts out as a license, which is normally revocable. Equity stops the revocation because it would be unjust.",
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
            "It makes ad coelum outdated and an inaccurate statement of actual law (practice Q5, answer B).",
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
          src: "Practice exam Q8",
        },
        {
          id: "ap-elements", topic: "Adverse possession",
          q: "What is required for a successful claim of ownership via adverse possession?",
          a: "Possession that is <b>actual</b>, <b>exclusive</b>, <b>open & notorious</b>, <b>continuous & uninterrupted</b>, and <b>adverse / hostile</b> under a claim of right, for the <b>statutory period</b>.",
          more: [
            "Continuous possession, NOT continuous use. AP is about possession: Jane can fence the land and never use it (practice Q7, answer C). Continuous use is what prescription requires, because an easement is a use right.",
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
