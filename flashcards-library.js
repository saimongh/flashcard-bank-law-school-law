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
          more: [
            "No lasting injury needed. Momentary pain counts.",
            "Gray area: harm that comes from P's reaction (startled stumble into hot cider), not the contact itself.",
            "  P: the contact directly or indirectly resulted in bodily harm, so it's harmful.",
            "  D: the contact itself impaired nothing; the harm came from P's own movement.",
            "Exam move: argue harmful both ways, then run offensive too. One is enough, and the harm comes in as damages either way.",
          ],
          src: "Restatement (Second) of Torts §§ 13, 15",
        },
        {
          id: "offensive-contact", topic: "Intentional", tag: "Battery · contact", back: "Definition",
          q: "Offensive contact",
          a: "Contact that would offend a reasonable person's sense of personal dignity. The question isn't whether P herself was offended, but whether a reasonable person in P's position would be.",
          elements: [
            "Setting & social norms — what's normal there? (crowded subway vs. walking past a show)",
            "Expectation & warning — did P see it coming or choose to take part?",
            "Relationship — stranger vs. friend",
            "Manner & force — gentle tap vs. smack; hand vs. object",
            "What was touched — intimate areas; zone of personality (clothes, bag)",
            "Meaning — hostile, sexual, mocking, or public humiliation vs. playful",
            "Known objection — signs, requests, prior complaints",
          ],
          more: [
            "Context defines what a reasonable person tolerates. Argue the factors for both sides.",
            "Exception to the objective test: if D knew of P's particular sensitivity, the test accounts for it.",
            "P doesn't need to feel offended or even be aware (kissing someone asleep).",
            "P's reaction doesn't prove offense. Eggshell doesn't lower the bar; it's a damages rule only.",
            "Not offensive: ordinary contacts of daily life (crowds, a tap on the shoulder).",
            "Close it out: \"[Conduct] is precisely the kind of affront to dignity the offensive-contact prong protects against.\"",
          ],
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
          id: "nominal-damages", topic: "Intentional", tag: "Damages", back: "Damages",
          q: "Nominal damages",
          a: "A token award (often $1) when P proves the tort but suffered no real loss. It vindicates P's right.",
          more: [
            "Available when harm isn't an element: battery, assault, false imprisonment, trespass to land.",
            "Not available when harm is an element: trespass to chattels, IIED, negligence.",
            "Can support punitive damages in many jurisdictions (<em>Jacque v. Steenberg Homes</em>: $1 nominal, $100,000 punitive).",
            "Exam line: \"Battery requires no injury, so P is entitled at least to nominal damages.\"",
          ],
        },
        {
          id: "compensatory-damages", topic: "Intentional", tag: "Damages", back: "Damages",
          q: "Compensatory damages",
          a: "Make P whole: put P back where P would have been without the tort.",
          elements: [
            "Economic — medical bills, lost wages, property damage",
            "Non-economic — pain and suffering, emotional distress, humiliation",
          ],
          more: [
            "Extended liability: an intentional tortfeasor is liable for the consequences of the tort even when they're unforeseeable.",
            "Eggshell plaintiff: D takes P as D finds P. Unusual fragility increases damages; it doesn't defeat the claim.",
            "D's argument: P's own reaction broke the chain. Answer: a natural reaction to the tort (flinch, startled jump) doesn't.",
            "Property torts: trespass to chattels → actual damages (repair, lost use). Conversion → full market value at the time of conversion.",
            "Exam line: \"An intentional tortfeasor is liable for the consequences of the tort even when they're unforeseeable, and under the eggshell plaintiff rule, D takes P as D finds P.\"",
          ],
        },
        {
          id: "punitive-damages", topic: "Intentional", tag: "Damages", back: "Damages",
          q: "Punitive damages",
          a: "Punish D and deter others. Not tied to P's loss.",
          elements: [
            "Aggravated conduct — malice, willfulness, or wanton disregard of P's rights (intent alone isn't enough)",
            "Underlying award — compensatory, or nominal in many jurisdictions",
            "Constitutional limit — ratios above single digits to compensatory are suspect",
          ],
          more: [
            "Supports: deliberate defiance (<em>Jacque</em>: dragged a mobile home across the land after being told no), spite, abuse of power, repeated conduct.",
            "Cuts against: carelessness or poor taste without malice, good faith, D helping P afterward.",
            "Exam line: \"Punitive damages are [likely/unlikely]: D acted [with malice / carelessly but without malice] because [facts].\"",
          ],
          src: "<em>State Farm v. Campbell</em> (2003)",
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
          id: "licensee-duty", topic: "Unintentional", tag: "Premises · licensee",
          q: "When does a possessor owe a licensee a duty to warn?",
          elements: [
            "Knowledge — possessor knows, or has reason to know, of the condition (no duty to inspect)",
            "Hidden — licensee not expected to discover it or appreciate the risk",
            "Unreasonable risk — more than the ordinary risks of everyday objects",
          ],
          more: [
            "All are fact questions for the jury, judged objectively. Judge decides only if reasonable minds couldn't differ.",
            "A spoken warning is enough. No sign required.",
          ],
        },
        {
          id: "licensee-hidden", topic: "Unintentional", tag: "Premises · licensee", back: "Factors",
          q: "How do you decide whether a danger is hidden from a licensee?",
          a: "Would a reasonable person in the licensee's position, paying ordinary attention, see the condition and understand the risk?",
          elements: [
            "Visibility — lighting, size, location, contrast",
            "Common knowledge — widely known risks are obvious",
            "Familiarity — licensee's prior visits or experience with the property",
            "Circumstances — darkness, distractions, rushing, carrying things",
          ],
          more: [
            "Licensee actually knew of the danger → no duty to warn.",
          ],
        },
        {
          id: "licensee-unreasonable", topic: "Unintentional", tag: "Premises · licensee", back: "Factors",
          q: "How do you decide whether a condition poses an unreasonable risk?",
          elements: [
            "Likelihood — how probable is harm?",
            "Severity — how serious would the harm be?",
            "Burden — how easy was it to fix or warn?",
          ],
          more: [
            "Serious hidden risk + cheap warning → unreasonable.",
            "Everyday risks (splinters, ordinary stairs) → not unreasonable.",
          ],
        },
        {
          id: "licensee-knowledge", topic: "Unintentional", tag: "Premises · licensee", back: "Evidence",
          q: "How do you show a possessor knew or had reason to know of a danger?",
          elements: [
            "Created it — possessor caused the condition",
            "Prior notice — earlier incidents or complaints",
            "Personal contact — possessor used or saw the condition",
          ],
          more: [
            "Doesn't count: dangers the possessor would only find by inspecting. Inspection is owed to invitees only.",
          ],
        },
        {
          id: "res-ipsa", topic: "Unintentional", tag: "Negligence · breach", back: "Elements",
          q: "<em>Res ipsa loquitur</em>",
          a: "\"The thing speaks for itself.\" Jury may infer breach from the accident itself when P can't point to a specific careless act.",
          elements: [
            "Ordinarily negligent — this kind of accident doesn't normally happen without negligence",
            "Control — the instrumentality was in D's exclusive control (R3d: D is in the class of actors whose negligence ordinarily causes it)",
            "No P fault — P didn't cause or contribute to it",
          ],
          more: [
            "Effect: gets P past summary judgment / directed verdict on breach.",
            "  Majority: permissible inference. Jury may, but needn't, find negligence.",
            "  Minority: presumption. Burden shifts to D.",
            "D rebuts with evidence of due care or another cause.",
            "<em>Byrne v. Boadle</em>: flour barrel falls from a warehouse window.",
            "<em>Ybarra v. Spangard</em>: unconscious patient can use it against the whole surgical team.",
          ],
          src: "Restatement (Third) of Torts § 17",
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
            "Picture it: one owner has a road on the west edge, a beach on the east, and a well-worn path from the west lots to the beach. She sells the west lot and keeps the beach strip. The buyer can still use the path: it was an obvious existing use, and a lot in a beach community is normally enjoyed with beach access.",
            "Picture the miss: same split, but no path and just woods. No obvious prior use, so no implied easement (<em>Schwab</em>: the road may not even have existed).",
            "Compare: prescription needs years of adverse use after the fact. Implication looks at what the common owner was already doing the moment the land was split.",
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
          id: "bailee-duty", topic: "Bailments", back: "Who's getting the favor?",
          q: "Bailee's duty of care: how careful does the holder have to be?",
          a: "It depends on who benefits. The more the holder (bailee) benefits, the more care they owe.",
          elements: [
            "Favor for the owner — your neighbor holds your bike for free. Liable only if grossly careless",
            "Deal for both — you pay a dry cleaner. Ordinary care, like a reasonable person",
            "Favor for the holder — you lend a friend your car for free. Liable even for slight carelessness",
          ],
          more: [
            "Gross = way below normal care. Ordinary = what a reasonable person wouldn't do. Slight = a small slip an extra-careful person would avoid.",
            "Formal names: sole benefit of bailor → mutual benefit → sole benefit of bailee.",
            "Compare: the <em>Allen</em> hotel garage was paid parking, so it's a deal for both: ordinary care.",
          ],
        },
        {
          id: "bailment-disclaimer", topic: "Bailments",
          q: "Can a bailee escape liability with a “not responsible” sign or ticket?",
          a: "Only if the disclaimer was actually brought to the owner's attention.",
          more: [
            "Picture it: fine print on a parking ticket saying the hotel isn't responsible for theft. Not enough unless the hotel shows the driver noticed it (<em>Allen</em>).",
            "The duty of care is a default rule, so parties can try to change it by agreement, but courts are skeptical.",
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
          id: "twines", topic: "Covenants", back: "TWIN + ES",
          q: "Requirements for the burden of an equitable servitude to run (TWIN-ES)",
          elements: [
            "Touch & concern — the subject matter affects landowners",
            "Writing — the original promise is in writing",
            "Intent — the original parties intended the burden to run",
            "Notice — the burdened party had notice, to avoid unfairness",
          ],
          more: [
            "TWIN + <b>ES</b>: the four elements, then ES = <b>E</b>quitable <b>S</b>ervitude.",
            "NO horizontal or vertical privity. That's why equitable servitudes run so much more easily.",
            "Picture it: <em>Tulk</em>: a garden in Leicester Square sold with a promise never to build. A later buyer knew and wanted to build anyway. Enjoined.",
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
        /* ═══ added: final-exam completion (Nov 23) ═══ */

        /* ── First possession, commons, finders ── */
        {
          id: "ghen", topic: "Possession",
          q: "What is the key takeaway of <em>Ghen v. Rich</em>?",
          a: "Custom can decide ownership of a wild animal. Under the whaling custom, “iron holds the whale”: the whale belongs to whoever first dealt the mortal wound.",
          more: [
            "Picture it: A whaler's bomb-lance kills a whale. It sinks, resurfaces days later 17 miles away, and a stranger finds it. The lance mark says whose it is.",
            "Consistent with <em>Pierson</em>'s mortal-wound rule.",
            "Compare: <em>Pierson</em> said hunters' custom should have settled that fox. Here custom does settle it.",
          ],
          src: "D. Mass. 1881",
        },
        {
          id: "ghen-why", topic: "Possession", tag: "Ghen · reasoning",
          q: "Why did <em>Ghen</em> bind Ellis and Rich, who were outside the whaling trade and didn't know the custom?",
          a: "They knew or should have known someone in the business killed the whale, and should have asked (constructive notice).",
          more: [
            "Picture it: Ellis, who has nothing to do with whaling, finds a dead whale with a lance mark and sells it. “I never heard of your custom” doesn't help him.",
            "Why custom at all: killing is the only act of appropriation possible, so without it the industry would cease.",
            "Compare: Constructive notice again: <em>Tulk</em>'s buyer who knew of the restriction.",
          ],
        },
        {
          id: "keeble", topic: "Possession",
          q: "What is the key takeaway of <em>Keeble v. Hickeringill</em>?",
          a: "Maliciously disrupting someone's lawful use of their own land for profit is actionable, even though no bird was ever in their possession.",
          more: [
            "Picture it: Someone fires a shotgun at dusk, just to spook ducks off your decoy pond. No duck ever lands on your land.",
            "Compare: Not <em>Pierson</em>: no duck is owned yet, but the use of the land is protected. <em>Campbell</em> protects land use the same way.",
          ],
          src: "Q.B. 1707",
        },
        {
          id: "keeble-compete", topic: "Possession", tag: "Keeble · reasoning",
          q: "Why wasn't Hickeringill's conduct just competition?",
          a: "He harmed Keeble's pond out of malice instead of building a better pond. No social benefit, and society lost.",
          more: [
            "Compare: Same utilitarian weighing as the nuisance test in <em>Hendricks</em>.",
          ],
        },
        {
          id: "commons", topic: "Possession",
          q: "What is the tragedy of the commons?",
          a: "A resource open to all gets overused, because each user keeps the benefit and spreads the cost.",
          more: [
            "Picture it: A pasture open to every farmer: each adds one more cow and shares the damage.",
            "Overutilization tragedy. There's an underutilization tragedy too.",
            "Compare: <em>Coffin</em>'s first-in-time rule fights it. Coming to the nuisance would make it worse (races to be first).",
          ],
        },
        {
          id: "commons-fixes", topic: "Possession", back: "Fixes",
          q: "Three fixes for the tragedy of the commons",
          elements: [
            "Leviathan — government control (coercive)",
            "Privatization — private control of portions",
            "Rotation — users take turns (Turkish fishermen)",
          ],
          more: [
            "Picture it: Leviathan: rangers set quotas. Privatization: fence the pasture. Rotation: Turkish fishermen take turns at fishing spots.",
            "Compare: Prior appropriation privatizes water rights.",
          ],
        },
        {
          id: "internalize", topic: "Possession",
          q: "Internalizing vs. externalizing costs",
          a: "Internalize: you bear the cost or get the benefit of your choice. Externalize: others do.",
          more: [
            "Drunk driving: risk to yourself is internalized; risk to others is externalized. People decide on internalized costs only.",
            "Compare: Takings: a government that must pay internalizes the cost. <em>Javins</em>: the landlord who pays for repairs internalizes the benefit.",
          ],
        },
        {
          id: "armory", topic: "Finders",
          q: "What is the key takeaway of <em>Armory v. Delamirie</em>?",
          a: "A finder has a right to possession good against everyone except the true owner, so a finder can sue a later wrongdoer.",
          more: [
            "Picture it: A chimney sweep's boy hands a found jewel to a goldsmith's apprentice to be weighed and gets back an empty socket.",
            "Compare: <em>Clark v. Maloney</em>: same rule with a finder against a finder.",
          ],
          src: "K.B. 1722",
        },
        {
          id: "armory-damages", topic: "Finders", tag: "Armory · damages",
          q: "How did <em>Armory</em> value the missing jewel?",
          a: "The jury was told to assume the best jewel that would fit the socket unless D produced it. That forces D to produce it (information forcing).",
          more: [
            "Picture it: The jury is told: assume the biggest jewel that socket could hold.",
            "Compare: Whoever holds the information bears the risk, a logic that shows up again in the cave and bailment cases.",
          ],
        },
        {
          id: "relativity", topic: "Finders",
          q: "Relativity of title",
          a: "Ownership is a ranking between the two parties in court. The plaintiff only has to show a better claim than the defendant, not ownership against the world.",
          more: [
            "Picture it: The goldsmith can't answer “you're not the true owner either.” Between him and the boy, the boy wins.",
            "Consequence: no <em>jus tertii</em>. A defendant can't win by pointing to a third party's better right.",
            "Compare: Same logic in AP: between two claimants, the better claim wins.",
          ],
        },
        {
          id: "absolute-special", topic: "Finders", back: "Definitions",
          q: "Absolute property vs. special property",
          elements: [
            "Absolute — good against all the world",
            "Special — good against all the world except the true owner (a finder's right)",
          ],
          more: [
            "Picture it: A finder holds a found ring against everyone but its owner.",
            "Compare: A finder is a bailee for the true owner until the limitations period runs.",
          ],
        },
        {
          id: "clark-maloney", topic: "Finders",
          q: "What is the key takeaway of <em>Clark v. Maloney</em>?",
          a: "The first finder beats a later finder. A finder's rights survive losing the item.",
          more: [
            "Picture it: A flood sets logs adrift in Delaware Bay. Clark moors them. They drift off and Maloney takes them.",
            "Compare: <em>Armory</em>: finder vs. wrongdoer. Here finder vs. finder. <em>Anderson v. Gouldberg</em> adds converter vs. converter.",
          ],
        },

        /* ── Water ── */
        {
          id: "natural-flow", topic: "Water",
          q: "Natural flow rule",
          a: "No one may take enough water for downstream owners to notice. Everyone is entitled to the same undiminished flow.",
          more: [
            "Picture it: Ten farms along a river. If one takes enough to be noticed downstream, the rest can object. Using more takes unanimous consent.",
            "Exceptions: all downstream owners consent, or rights are sold. Problem: assembling everyone (a holdout problem).",
            "Compare: The same holdout problem drives eminent domain. <em>Evans</em> and <em>Coffin</em> replace this rule.",
          ],
        },
        {
          id: "water-weaknesses", topic: "Water", back: "Weak spots",
          q: "Weakness of each western-vs-eastern water rule",
          elements: [
            "Reasonable use — what's reasonable varies by place and era",
            "Prior appropriation — “beneficial use” is vague (courts have been generous)",
          ],
          more: [
            "Picture it: Indoor plumbing was a luxury once, now a need. “Reasonable” moves with the era.",
          ],
        },

        /* ── Adverse possession ── */
        {
          id: "ap-actual", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “actual” possession?",
          a: "Using the land the way a normal owner would. Maintaining and managing it supports the claim.",
          more: [
            "Picture it: Mowing, planting, and fixing a fence, as an owner would.",
            "Compare: <em>Scott</em>: wild land needs less.",
          ],
        },
        {
          id: "ap-exclusive", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “exclusive” possession?",
          a: "Not sharing possession with others, especially not the true owner.",
          more: [
            "Picture it: You and the true owner both use the field: not exclusive.",
            "Compare: A prescriptive easement doesn't need exclusivity, because it's a use right.",
          ],
        },
        {
          id: "ap-open", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “open and notorious” possession?",
          a: "The true owner had adequate notice (inquiry notice counts) and a chance to stop it.",
          more: [
            "Picture it: A fence and a garden anyone walking by can see.",
            "Compare: Inquiry notice again in the notice-types card.",
          ],
        },
        {
          id: "scott", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Scott v. Anderson-Tully</em>?",
          a: "On wild, unimproved land, sparse but visible acts of ownership (marking, logging, leasing) can be enough.",
          more: [
            "Picture it: Blue paint on a fence line, repainted twice. Logging crews three times in 40 years. Hunting leases.",
            "Trap: a fence alone proves nothing, and paying taxes alone doesn't establish ownership.",
            "Compare: <em>Howard</em>: a summer cabin. Both adjust “continuous” to the land.",
          ],
          src: "Miss. 2015",
        },
        {
          id: "carpenter", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Carpenter v. Ruperto</em>?",
          a: "Iowa requires good faith. Someone who knows the land isn't theirs can't adversely possess it.",
          more: [
            "Picture it: A homeowner plants bushes, adds a propane tank, then a driveway, on the empty lot next door, knowing it isn't hers.",
            "Compare: <em>Howard</em>: mistaken deeds are fine. Here, knowledge sinks the claim.",
          ],
          src: "Iowa 1982",
        },
        {
          id: "carpenter-line", topic: "Adverse possession", tag: "Carpenter · line",
          q: "Where does <em>Carpenter</em> draw the good-faith line?",
          a: "“I mistakenly thought it was mine” is fine. “I knew I had no right” is a squatter. Knowing your title is merely defective is also fine.",
          more: [
            "Compare: <em>Howard</em>'s cabin owners were mistaken (fine). Carpenter knew (barred).",
          ],
        },
        {
          id: "howard-kunto", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Howard v. Kunto</em>?",
          a: "Continuity is judged by how an owner of that kind of property normally uses it, and a chain of good-faith owners can tack even with wrong deeds.",
          more: [
            "Picture it: A row of summer cabins on Hood Canal where every deed names the neighbor's lot, passed along cabin to cabin.",
            "Compare: <em>Scott</em>: continuity adjusted to the land. <em>Tacking</em> needs privity.",
          ],
          src: "Wash. 1970",
        },
        {
          id: "tacking", topic: "Adverse possession",
          q: "Tacking",
          a: "Adding earlier possessors' time to yours to reach the statutory period. It requires privity between successive possessors.",
          more: [
            "Picture it: Cabin owner 1 sells to owner 2, who sells to the Kuntos. Their years add up.",
            "Usually a deed. <em>Howard</em> accepted a physical handoff by innocent purchasers.",
            "Compare: <em>Howard</em>.",
          ],
        },

        /* ── Right to exclude ── */
        {
          id: "jacque", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Jacque v. Steenberg Homes</em>?",
          a: "Nominal damages can support punitive damages for an intentional trespass to land. Losing the right to exclude is itself an injury.",
          more: [
            "Picture it: A snow-covered field, the owners say no, and the crew plows through anyway.",
            "Compare: <em>Hinman</em>: no right to exclude the sky, so no injury. <em>Jacque</em>: a right to exclude, so even harmless entry hurts.",
          ],
          src: "Wis. 1997",
        },
        {
          id: "jacque-why", topic: "Right to exclude", back: "Why punitive",
          q: "Why did <em>Jacque</em> allow punitive damages?",
          elements: [
            "Individual interest — without a deterrent, owners turn to self-help",
            "Society's interest — trespass shouldn't be a cheap cost of doing business",
          ],
          more: [
            "Picture it: Without punishment the Jacques might confront the crew themselves.",
            "Compare: <em>Baker</em>: the farmer who shot the dogs.",
          ],
        },
        {
          id: "ad-coelum", topic: "Right to exclude",
          q: "What is <em>ad coelum</em> and how do the cases treat it?",
          a: "Whoever owns the soil owns up to the heavens and down to the depths. <em>Hinman</em> rejects it for airspace. <em>Edwards</em> arguably keeps it underground.",
          more: [
            "Picture it: Draw a cone from every lot to the earth's center: they all overlap.",
            "Absurdity: you can't own the infinite, and the earth spins. “The law makes long spokes of the short stakes of men.”",
            "Compare: <em>Hinman</em> (air) vs. <em>Edwards</em> (underground).",
          ],
        },
        {
          id: "edwards-lee", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Edwards v. Lee's Administrator</em>?",
          a: "Ownership runs down whether or not the owner uses the space. Lee owned the cave under his land and shared in the profits, with no access or use.",
          more: [
            "Picture it: Tourists walk through a cave whose far rooms lie under the neighbor's farm.",
            "Compare: <em>Hinman</em>: planes at 100 feet owe nothing. Opposite result.",
          ],
          src: "Ky. 1936",
        },
        {
          id: "bundle", topic: "Right to exclude",
          q: "Bundle of rights",
          a: "Property is a collection of separable rights (possess, use, exclude, dispose). You can lack some and still have property. The hard question is which are essential.",
          more: [
            "Picture it: Sticks in a bundle: use, exclude, sell, give.",
            "Contrast Blackstone's essentialist “sole and despotic dominion.”",
            "Compare: <em>Moore</em> and <em>Hinman</em>. An easement is one stick sold.",
          ],
        },
        {
          id: "dominion", topic: "Right to exclude",
          q: "Dominion",
          a: "Exclusive control enough to keep everyone else out. Land can be dominated. Air and sea can only be used.",
          more: [
            "Picture it: Fencing a field works. Try fencing the sky.",
            "<em>Hinman</em>: dominion is the “essence and origin” of a property right.",
          ],
        },
        {
          id: "moore", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Moore v. Regents</em>?",
          a: "No conversion: cells removed from a patient's body aren't his property. But he can sue for breach of fiduciary duty and lack of informed consent.",
          more: [
            "Picture it: Surgeons remove a spleen to treat him. Researchers quietly culture the cells and patent the line.",
            "Compare: <em>Jacque</em> protects exclusion; <em>Moore</em> declines to treat tissue as property. Later cases: frozen sperm is property (<em>Hecht</em>).",
          ],
          src: "Cal. 1990",
        },
        {
          id: "moore-why", topic: "Right to exclude", back: "Why no conversion",
          q: "Why did <em>Moore</em> reject conversion?",
          elements: [
            "No precedent — no case keeps property in cells that leave the body",
            "Statute — California requires excised tissue to be destroyed",
            "Patent — the cell line isn't the raw cells",
            "Strict liability — it would chill research",
            "Deep policy — the legislature's job",
          ],
          more: [
            "Picture it: A researcher buys a sample from a colleague with no idea there's a consent problem and is strictly liable.",
            "Compare: Henrietta Lacks: HeLa cells, about 20 tons grown, roughly 11,000 patents.",
          ],
        },
        {
          id: "moore-dissent", topic: "Right to exclude", tag: "Moore · dissent",
          q: "What was Justice Mosk's dissent in <em>Moore</em>?",
          a: "Property is a bundle. Losing some sticks (can't keep the tissue) isn't losing all, so Moore should control commercial use.",
          more: [
            "Irony: the defendants say Moore can't own his tissue, but they can.",
            "Compare: <em>Hinman</em>'s bundle view: the essential stick there was use.",
          ],
        },
        {
          id: "baker-hunt", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Baker v. Howard County Hunt</em>?",
          a: "Equity can enjoin a pattern of repeated trespass even if no single trespass would justify it. The landowner's right beats the hunt's tradition.",
          more: [
            "Picture it: Hounds trample rabbit experiments and swarm the chicken yard, again and again.",
            "Compare: <em>Jacque</em>: damages deter. Here the remedy is an injunction.",
          ],
          src: "Md. 1936",
        },
        {
          id: "equity-test", topic: "Right to exclude", back: "Test",
          q: "When is an injunction available (<em>Baker</em>)?",
          elements: [
            "No adequate remedy at law — the injury is immeasurable, or repeated suits would be needed",
            "Clean hands — P's own conduct in the dispute wasn't seriously wrongful",
          ],
          more: [
            "Picture it: Suing after every hunt would never end.",
            "Baker still had clean hands: the shooting was defense of property, not mere trespass.",
            "Compare: Same remedy question as the nuisance injunction.",
          ],
        },
        {
          id: "self-help", topic: "Right to exclude",
          q: "How much force may an owner use against a trespasser?",
          a: "Reasonable force to end the trespass (bouncers do this). Lethal force is never allowed just to stop a trespass.",
          more: [
            "Picture it: A bouncer removes a rowdy guest.",
            "Compare: <em>Wood v. Leadbitter</em>: reasonable force once a license is revoked.",
          ],
        },
        {
          id: "injunction-v-punitive", topic: "Right to exclude",
          q: "Injunction vs. punitive damages: what's the difference in reach?",
          a: "An injunction is in personam: it stops this defendant, enforced by contempt. Punitive damages deter trespassers generally, including non-parties.",
          more: [
            "Picture it: A court order tells this Hunt Club to stop. It doesn't bind any other hunt.",
            "Compare: <em>Baker</em> (injunction) vs. <em>Jacque</em> (punitive).",
          ],
        },
        {
          id: "in-rem", topic: "Right to exclude", back: "Definitions",
          q: "In rem vs. in personam",
          elements: [
            "In rem — directed at the thing; good against the world",
            "In personam — directed at one specific person",
          ],
        },
        {
          id: "pile", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Pile v. Pedrick</em>?",
          a: "The old rule: an encroachment must be removed, however slight. Once Pedrick learned of the surveyor's mistake, leaving the wall made the trespass intentional.",
          more: [
            "Picture it: A foundation sits an inch over the line, with a factory wall already built on it.",
            "Compare: <em>Golden Press</em> overturns this for good-faith, slight encroachments.",
          ],
          src: "Pa. 1895",
        },
        {
          id: "encroach-faith", topic: "Right to exclude", back: "Good vs. bad faith",
          q: "Why does good faith matter when choosing between damages and an injunction for an encroachment?",
          elements: [
            "Good faith, slight, costly to remove — damages. An injunction would let P extort a high price to waive removal",
            "Bad faith — injunction. Otherwise D could encroach on purpose, knowing damages are cheaper than suing",
          ],
          more: [
            "Picture it: Removal costs $20,000. The damage is $55. The owner demands $12,000 to let it stay.",
            "Damages here are a one-time payment, so the result works like a permanent easement.",
            "Compare: <em>Golden Press</em> (good faith) vs. <em>Pile</em> (removal).",
          ],
        },
        {
          id: "enforce-exclusion", topic: "Right to exclude", back: "Ways",
          q: "How is the right to exclude enforced?",
          elements: [
            "Self-help — with limits",
            "Criminal trespass — usually small penalties",
            "Civil trespass — protects possession",
            "Ejectment — protects title; beats an adverse possessor once discovered",
            "Nuisance — protects use and enjoyment, not exclusion",
          ],
          more: [
            "Compare: See the nuisance vs. trespass card.",
          ],
        },
        {
          id: "ploof", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Ploof v. Putnam</em>?",
          a: "Necessity (saving life and property from a sudden peril) privileges entering another's land. Unmooring the boat was actionable.",
          more: [
            "Picture it: A storm hits. A family ties their sloop to a dock, and the owner's servant casts it loose.",
            "Compare: <em>Vincent</em>: you may enter but you pay. <em>Shack</em> is another limit on exclusion.",
          ],
          src: "Vt. 1908",
        },
        {
          id: "incomplete-privilege", topic: "Right to exclude",
          q: "Incomplete privilege (<em>Vincent v. Lake Erie</em>)",
          a: "A privilege to enter by necessity doesn't excuse damage. The entrant still pays for harm caused by the entry and presence.",
          more: [
            "Picture it: A ship tied to a dock in a storm batters it. The shipowner pays for the damage.",
            "Compare: <em>Ploof</em>.",
          ],
        },
        {
          id: "uston", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Uston v. Resorts International</em>?",
          a: "A casino can't exclude a patron just for lawful card counting. The right to exclude yields to reasonable access for places open to the public.",
          more: [
            "Picture it: A blackjack pro counts cards, never touching or marking one, and is banned anyway.",
            "Uston wasn't disruptive, and the regulations didn't ban counting. “Reasonable” is decided case by case.",
            "Compare: <em>Shack</em>: another limit on the right to exclude.",
          ],
          src: "N.J. 1982",
        },
        {
          id: "uston-rule", topic: "Right to exclude", tag: "Uston · rule",
          q: "What principle explains how much public access an owner must allow?",
          a: "The more private property is devoted to public use, the more public accommodation is required.",
          more: [
            "Picture it: A closed private home vs. a casino that invites the public in.",
            "Prof. Lee's restatement (not the court's): the more the owner profits from public access, the more accommodation owed.",
            "Compare: Dress codes and age limits raise the same “reasonable?” question.",
          ],
        },
        {
          id: "limits-exclude", topic: "Right to exclude", back: "Limits",
          q: "What limits the right to exclude?",
          elements: [
            "Necessity — <em>Ploof</em>",
            "Public accommodation — <em>Uston</em>",
            "Public policy, human values — <em>Shack</em>",
            "Statute — Fair Housing Act",
            "Constitution — <em>Shelley</em>",
          ],
        },
        {
          id: "shelley", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Shelley v. Kraemer</em>?",
          a: "A court's enforcement of a racially restrictive covenant is state action that violates the 14th Amendment. The private covenant itself isn't unconstitutional.",
          more: [
            "Picture it: A Black family buys a house on a block with a 1911 covenant. The neighbors sue to enforce it.",
            "Compare: <em>Tulk</em>: covenants can run. <em>Shelley</em> limits how courts enforce them.",
          ],
          src: "U.S. 1948",
        },
        {
          id: "shelley-scope", topic: "Right to exclude", tag: "Shelley · scope",
          q: "Why is <em>Shelley</em> about enforceability, not validity?",
          a: "The 14th Amendment reaches only state action. A private agreement isn't state action, but a court enforcing it is.",
          more: [
            "Worry: if enforcing a contract is state action, almost everything is.",
          ],
        },
        {
          id: "fha", topic: "Right to exclude",
          q: "What does the Fair Housing Act prohibit?",
          a: "Discrimination (race, religion, color, sex, etc.) in selling or renting a dwelling, and in the terms of sale or rent.",
          more: [
            "Picture it: A landlord refuses to rent because of the applicant's race.",
            "Compare: <em>Shelley</em>.",
          ],
        },
        {
          id: "fha-exceptions", topic: "Right to exclude", tag: "FHA · exceptions", back: "Exceptions",
          q: "What does the Fair Housing Act not reach?",
          elements: [
            "Mrs. Murphy exception — a small multi-family home where the owner lives (but not advertising)",
            "Roommate selection — not a “dwelling” in the narrow sense, to avoid constitutional problems",
          ],
          more: [
            "Picture it: An owner who lives in a small multi-family building picks her own tenants.",
            "Roommates are an intimate relationship: size, purpose, selectivity, others excluded from critical aspects.",
          ],
        },

        /* ── Bailments, abandonment, transfer ── */
        {
          id: "mcglynn", topic: "Bailments",
          q: "Park-and-lock: how does the majority (<em>McGlynn</em>) decide if there's a bailment?",
          a: "It skips dominion and control and asks where a duty of care should fall. Garage operators owe customers reasonable care.",
          more: [
            "Picture it: You hand your keys to a garage and your car vanishes.",
            "Why: the operator is expected to protect the cars, so the loss shouldn't fall on the consumer. A ticket disclaimer fails unless shown to have been brought to the driver's attention.",
            "Compare: The dry cleaner is the classic bailee; the disclaimer rule matches.",
          ],
          src: "N.J. 1981",
        },
        {
          id: "abandon-real", topic: "Abandonment",
          q: "Can you abandon real property?",
          a: "No. Real property must always have an owner.",
          more: [
            "Picture it: An empty old hospital with no owner paying taxes.",
            "Why: confusion over who owns it, unpaid taxes, and externalities on neighbors from neglected property.",
            "Compare: Governments leave property empty because they can't be sued without consent.",
          ],
        },
        {
          id: "escheat", topic: "Abandonment",
          q: "Escheat",
          a: "Property (often money) with no activity for a long time reverts to the state as abandoned.",
          more: [
            "Picture it: A dormant bank account goes to the state.",
            "Compare: Compare abandoning personal property.",
          ],
        },
        {
          id: "eyerman", topic: "Abandonment",
          q: "What is the key takeaway of <em>Eyerman v. Mercantile Trust</em>?",
          a: "A will's direction to destroy property won't be enforced on public policy grounds when it's capricious, serves no purpose, and harms neighbors, the community, and the estate.",
          more: [
            "Picture it: A will orders a St. Louis house razed, leaving a gap in a row of homes (a “missing front tooth”).",
            "Compare: <em>Brokaw</em>: both fights fed the landmark-preservation law.",
          ],
        },
        {
          id: "eyerman-why", topic: "Abandonment", tag: "Eyerman · reasoning",
          q: "Why can a living owner raze her house but a will can't order it?",
          a: "A living owner is checked by self-interest. A dead testator bears no cost, so only the court is a check. Inheritance is also a state-granted privilege that can carry conditions.",
          more: [
            "Picture it: A trust to throw $1,000 into the sea.",
            "Restatement (Second) of Trusts § 124: a trust to throw money into the sea is unenforceable.",
            "Compare: The living-owner check parallels waste: a life tenant bears some costs of her choices.",
          ],
        },
        {
          id: "eyerman-dissent", topic: "Abandonment", tag: "Eyerman · dissent",
          q: "What is the dissent's critique in <em>Eyerman</em>?",
          a: "Judicial activism: courts shouldn't invent public policy. The record gave no motive, the beneficiaries and city weren't complaining, and the landmark came after her death.",
          more: [
            "Compare: Penn Station and <em>Brokaw</em> led to landmark laws (<em>Penn Central</em>).",
          ],
        },
        {
          id: "alienation", topic: "Transfer",
          q: "Can a grantor forbid the grantee from ever transferring the property?",
          a: "No. You can place conditions on a transfer, but restraints on alienation are not enforceable.",
          more: [
            "Picture it: “To B, but B may never sell it”: the restriction is void.",
          ],
        },
        {
          id: "statute-frauds", topic: "Transfer",
          q: "What form must a sale of real property take?",
          a: "A writing (Statute of Frauds).",
        },
        {
          id: "nemo-dat", topic: "Transfer",
          q: "<em>Nemo dat quod non habet</em>",
          a: "No one gives what they don't have. A buyer gets only what the seller actually owned.",
          more: [
            "Picture it: A scammer “sells” the Brooklyn Bridge. The buyer sets up tollbooths and is stopped by police.",
            "A and B co-own and A sells to C: C co-owns with B. Selling the Brooklyn Bridge gives the buyer nothing. The good-faith purchaser doctrine is an exception.",
            "Compare: <em>Harms</em>: John could encumber only his own share.",
          ],
        },
        {
          id: "recording-torrens", topic: "Transfer", back: "Systems",
          q: "Recording system vs. Torrens (registration) system",
          elements: [
            "Recording (US) — a public office accepts documents in proper form without checking validity",
            "Torrens — the registry investigates title and rejects defective documents",
          ],
          more: [
            "Picture it: A clerk stamps a forged deed because the form looks right.",
            "Torrens is the rest of the world's system. Minneapolis–St. Paul uses it.",
            "Compare: Notice types.",
          ],
        },
        {
          id: "notice-types", topic: "Transfer", back: "Types of notice",
          q: "Actual, record, and inquiry notice",
          elements: [
            "Actual — you actually know",
            "Record — it was in the public records, so you should have known",
            "Inquiry — you could and should have asked",
          ],
          more: [
            "Picture it: Actual: you got the letter. Record: it's in the land records. Inquiry: you saw a stranger's driveway and didn't ask.",
            "Record and inquiry notice are both constructive notice.",
            "Compare: <em>Tulk</em>: the buyer knew.",
          ],
        },
        {
          id: "boundary-systems", topic: "Transfer", back: "Systems",
          q: "Metes and bounds vs. rectangular survey",
          elements: [
            "Metes and bounds — landmarks and directions; breaks when landmarks move or vanish",
            "Rectangular survey — a grid by latitude and longitude; costlier to set up, used today",
          ],
          more: [
            "Picture it: “Walk east from the oak tree.” The tree burns down.",
          ],
        },

        /* ── Servitudes ── */
        {
          id: "easement-vs-covenant", topic: "Servitudes", back: "Definitions",
          q: "Easement vs. covenant",
          elements: [
            "Easement — a use right: permission to go on land (a waiver of the right to exclude)",
            "Covenant — a promise to do or not do something on land",
          ],
          more: [
            "Picture it: Easement: the right to cross your yard. Covenant: a promise not to paint the house.",
            "Both are servitudes: durable and able to run with the land. They make sense because land can't move.",
            "Compare: <em>Baseball Publishing</em> (easement); <em>Tulk</em> (covenant).",
          ],
        },
        {
          id: "affirmative-negative", topic: "Servitudes",
          q: "Affirmative vs. negative easement",
          a: "Affirmative: the dominant owner may do something on the servient land. Negative: the servient owner is barred from doing something otherwise allowed.",
          more: [
            "Picture it: Affirmative: walk across the yard. Negative: your neighbor can't block your window's light.",
          ],
        },
        {
          id: "negative-categories", topic: "Servitudes", back: "Negative easements",
          q: "What are the classic negative easements?",
          elements: [
            "Light — to windows",
            "Air — flow in a defined channel",
            "Water — flow in an artificial channel",
            "Lateral support — for buildings",
          ],
          more: [
            "Picture it: Pull books from a shelf and the neighbors topple: lateral support.",
            "Some states add views. No negative easement by prescription (no use to point to).",
          ],
        },
        {
          id: "ease-necessity", topic: "Easements", back: "Elements",
          q: "Easement by necessity",
          elements: [
            "Common owner — both parcels once owned by one person",
            "Severance — the owner sold part",
            "Landlocked — the severed part had no road access at severance",
          ],
          more: [
            "Picture it: A parcel splits and the back half has no road.",
            "Runs only for the grantee over the grantor's land. The seller who landlocks herself gets nothing (<em>Schwab</em>).",
            "Compare: <em>Schwab</em>: the seller who landlocked himself got nothing.",
          ],
        },
        {
          id: "tulk", topic: "Covenants",
          q: "What is the key takeaway of <em>Tulk v. Moxhay</em>?",
          a: "It created the equitable servitude: a buyer who knew of a restriction can be enjoined from violating it, even without privity.",
          more: [
            "Picture it: A London square with a statue and iron railing, sold with a promise to keep it a garden. The buyer knows and wants to build.",
            "Compare: <em>Shelley</em>: covenants and courts.",
          ],
          src: "Ch. 1848",
        },
        {
          id: "pricing-in", topic: "Covenants",
          q: "“Pricing in”",
          a: "A buyer who knows an item's disadvantages can factor them into the price. If the law then removes the disadvantage, the buyer gets a windfall.",
          more: [
            "Picture it: You buy a restricted house at a discount, then the restriction vanishes.",
          ],
        },

        /* ── Nuisance ── */
        {
          id: "nuisance-prima", topic: "Nuisance", back: "Prima facie case",
          q: "Nuisance: what must P show?",
          elements: [
            "Unreasonable use — you can use your property, but not so as to harm others",
            "Material annoyance — mere annoyance isn't enough",
            "Substantial injury — tangible, appreciable harm to the property, or enjoyment made especially uncomfortable",
          ],
          more: [
            "Picture it: Gas from a brickyard kills the neighbor's trees.",
            "Locality matters: “a right thing in the wrong place” (<em>Euclid</em>). City life's ordinary noise and dirt must be tolerated.",
            "Compare: <em>Keeble</em> also protects land use from interference.",
          ],
        },
        {
          id: "campbell-seaman", topic: "Nuisance",
          q: "What is the key takeaway of <em>Campbell v. Seaman</em>?",
          a: "A brickyard's sulfurous gas was a nuisance even though it blew over only on certain days. Coming to the nuisance and prescription didn't defeat it.",
          more: [
            "Picture it: Sulfurous fumes on only two days of each burn, and only when the wind blows right.",
            "Compare: <em>Keeble</em>; coming to the nuisance would mirror first-in-time (<em>Coffin</em>).",
          ],
          src: "N.Y. 1876",
        },
        {
          id: "nuisance-balancing", topic: "Nuisance",
          q: "How is a private nuisance balanced (<em>Hendricks v. Stalnaker</em>)?",
          a: "An interference is unreasonable when the gravity of the harm outweighs the social value of the activity causing it.",
          more: [
            "Picture it: A factory's jobs vs. the neighbors' lungs.",
            "Factors: extent and character of harm, social value of D's use, suitability to the locality, how avoidable the harm was.",
            "Compare: <em>Keeble</em>: no social value on D's side.",
          ],
        },
        {
          id: "coming-nuisance", topic: "Nuisance",
          q: "Is “coming to the nuisance” a defense?",
          a: "Rarely. It would let the first user control neighbors' land and spur wasteful races to be first.",
          more: [
            "Picture it: A factory is built first, houses go up next door later.",
            "If accepted, the later arrival loses. Good faith vs. spite, public interest, and estoppel or acquiescence also matter.",
            "Compare: It would work like first-in-time (<em>Coffin</em>), which courts decline to copy.",
          ],
        },
        {
          id: "nuisance-v-trespass", topic: "Nuisance", back: "Tests",
          q: "Trespass or nuisance? What distinguishes them?",
          elements: [
            "Location — act on P's land points to trespass; outside it, to nuisance",
            "Directness — intentional and direct points to trespass; indirect (smoke on the wind) to nuisance",
            "Matter — tangible (visible to the naked eye) points to trespass; intangible (heat) to nuisance",
            "Interest — trespass protects possession; nuisance protects enjoyment",
          ],
          more: [
            "Picture it: Smoke drifting on the wind vs. a worker stepping onto your lawn.",
            "None is dispositive. Nuisance requires damage; trespass doesn't.",
          ],
        },
        {
          id: "nuisance-remedy", topic: "Nuisance", back: "Injunction questions",
          q: "When will a court enjoin a nuisance rather than award damages?",
          elements: [
            "Irreparable injury — money damages aren't enough",
            "Not unjustly inequitable — the injunction doesn't impose a disproportionate burden",
          ],
          more: [
            "Picture it, injunction: a brickyard keeps venting sulfurous fumes onto a neighbor's orchard. Paying for last year's dead trees doesn't stop next year's, so the court orders the fumes stopped.",
            "Picture it, damages only: a one-time smell from a town's only factory, where shutting it would cost hundreds of jobs and the harm is small. An injunction would be unjustly inequitable.",
            "Under Restatement (Second), the court weighs the social value of the nuisance against the value of the use it harms.",
            "Compare: <em>Baker</em> and <em>Golden Press</em> ask the same remedy questions.",
          ],
        },

        /* ── Future interests and waste ── */
        {
          id: "fsa", topic: "Future interests",
          q: "Fee simple absolute",
          a: "The largest ownership package; every other estate is carved out of it. A grant “to B” is presumed a fee simple absolute.",
          more: [
            "Picture it: “To Jones.” Jones gets everything.",
            "“To Jones and his heirs” means the same, because a living person has no heirs, only heirs apparent.",
          ],
        },
        {
          id: "life-estate", topic: "Future interests",
          q: "Life estate",
          a: "Ownership that ends at a person's death. “To Jones for life.”",
          more: [
            "Picture it: Aunt gives the house “to Jones for life.” Jones sells to Smith, who loses it when Jones dies.",
            "If Jones sells, the buyer's life estate ends at Jones's death (<em>pur autre vie</em>). <em>Nemo dat</em>.",
          ],
        },
        {
          id: "pur-autre-vie", topic: "Future interests",
          q: "<em>Pur autre vie</em>",
          a: "“For the life of another.” An interest measured by someone else's life.",
          more: [
            "Picture it: A squatter on a life tenant's land keeps it only until the life tenant dies.",
            "An adverse possessor against a life tenant gets a life estate <em>pur autre vie</em>. The remainderman is unaffected.",
          ],
        },
        {
          id: "defeasible-fees", topic: "Future interests", back: "Three defeasible fees",
          q: "What are the three defeasible fees?",
          elements: [
            "Fee simple determinable — ends automatically; grantor holds a possibility of reverter",
            "Fee simple subject to condition subsequent — grantor may retake; grantor holds a right of entry",
            "Fee simple subject to executory limitation — a third party takes; the third party holds an executory interest",
          ],
          more: [
            "Picture it: “To Disney until it stops using animals.” “To Meghan, but if she joins a royal family…” “To Barbie as long as…, then to Ken.”",
            "Contrast a life estate: the event (death) is certain, only its timing is uncertain.",
          ],
        },
        {
          id: "fsd", topic: "Future interests",
          q: "How do you create a fee simple determinable?",
          a: "Durational language (“as long as,” “while,” “until”). The grantor holds a possibility of reverter, and the property returns automatically.",
          more: [
            "Picture it: “To Disney as long as it makes animal movies.” Disney stops and ownership snaps back automatically.",
            "“To Huxley College as long as it's used for instruction.”",
          ],
        },
        {
          id: "fsscs", topic: "Future interests",
          q: "How do you create a fee simple subject to condition subsequent?",
          a: "Conditional language (“but if,” “on condition that”). The grantor holds a right of entry and must act to retake it.",
          more: [
            "Picture it: “To Dakota on condition she never makes a superhero movie.” If she does, the grantor must act to retake it.",
            "“To A, but if marijuana is inhaled on the premises, O may re-enter.”",
          ],
        },
        {
          id: "fssel", topic: "Future interests",
          q: "What makes a fee simple subject to executory limitation?",
          a: "A third party, not the grantor, takes when the event happens. That party holds an executory interest, which cuts off the prior owner.",
          more: [
            "Picture it: “To Barbie as long as ___, then to Ken.” Ken takes over, not the grantor.",
            "Durational or conditional language both work. “To Barbie as long as ___, then to Ken.” Transfer is usually automatic.",
          ],
        },
        {
          id: "which-future", topic: "Future interests", back: "Grantor's interest",
          q: "What future interest does the grantor keep after each estate?",
          elements: [
            "Life estate — reversion",
            "Fee simple determinable — possibility of reverter",
            "Fee simple subject to condition subsequent — right of entry",
            "Fee simple subject to executory limitation — none (a third party has the executory interest)",
          ],
        },
        {
          id: "reversion-reverter", topic: "Future interests", back: "Don't confuse",
          q: "Reversion vs. possibility of reverter",
          elements: [
            "Reversion — grantor's interest after a life estate",
            "Possibility of reverter — grantor's interest after a fee simple determinable",
          ],
          more: [
            "Picture it: Reversion: “to A for life.” Reverter: “to the College as long as…”.",
          ],
        },
        {
          id: "remainder", topic: "Future interests",
          q: "Remainder",
          a: "A future interest in a third party that takes when a prior estate, such as a life estate, ends naturally.",
          more: [
            "Picture it: “To A for life, then to B.” B waits.",
            "“To A for life, then to B”: A has a life estate and B a remainder.",
          ],
        },
        {
          id: "contingent-remainder", topic: "Future interests",
          q: "O to A for life, then to B for life, then to B's children who survive B. Who has what?",
          elements: [
            "A — life estate",
            "B — remainder in a life estate",
            "B's surviving children — contingent remainder in fee simple absolute",
            "O — implied reversion",
          ],
        },
        {
          id: "fee-principle", topic: "Future interests",
          q: "What is the fee principle?",
          a: "No gaps in ownership. Someone must always be entitled to take the property.",
          more: [
            "Picture it: There can be no moment when nobody can take the property.",
            "Compare: Like the ban on abandoning real property.",
          ],
        },
        {
          id: "rap", topic: "Future interests",
          q: "Rule against perpetuities",
          a: "No interest is good unless it must vest, if at all, within 21 years after the death of a life in being at the interest's creation.",
          more: [
            "Most states have abandoned it (often for a 90-year wait-and-see). New York keeps the common-law rule.",
          ],
        },
        {
          id: "waste", topic: "Waste",
          q: "What is waste, and is it mandatory?",
          a: "A rule limiting a present holder's harm to property others will own later. It's a default rule, so the parties can agree otherwise.",
          more: [
            "Picture it: A life tenant chops ornamental trees to open a skyline view. The remaindermen liked the trees.",
            "Conflict arises because dividing property across time divides interests. Ordinary wear and tear is not waste.",
            "Compare: <em>Brokaw</em>.",
          ],
        },
        {
          id: "waste-types", topic: "Waste", back: "Types",
          q: "Three kinds of waste",
          elements: [
            "Affirmative — a harmful, abnormal act (cutting ornamental trees)",
            "Permissive — failing to act (letting a roof leak)",
            "Ameliorative — a significant change that raises market value; historically still prohibited",
          ],
        },
        {
          id: "brokaw", topic: "Waste",
          q: "What is the key takeaway of <em>Brokaw v. Fairchild</em>?",
          a: "A life tenant can't demolish a mansion to build more profitable apartments. The property must pass to the remaindermen as nearly unimpaired in its basic nature as practicable.",
          more: [
            "Picture it: Four mansions, each a life estate to a child. George wants to raze his and build apartments.",
            "Compare: <em>Eyerman</em> and Penn Station fed the landmark law.",
          ],
        },
        {
          id: "brokaw-value", topic: "Waste", tag: "Brokaw · reasoning",
          q: "Why didn't higher market value excuse the demolition in <em>Brokaw</em>?",
          a: "Whether demolition is financially wise isn't the court's concern. Enforcing the law of waste is, and no one is sure all-things-considered value (like sentiment) would go up.",
        },

        /* ── Concurrent ownership ── */
        {
          id: "tic", topic: "Concurrent ownership",
          q: "Tenancy in common",
          a: "Each co-owner has an equal right to possess the whole, but each share is separate and transferable (sell, give, will). No survivorship.",
          more: [
            "Picture it: Jack and Jill can both walk through every room.",
            "Today's presumption for a grant to A and B, even if the four unities are present.",
          ],
        },
        {
          id: "tic-rent", topic: "Concurrent ownership",
          q: "Can a tenant in common demand rent from a co-tenant who occupies the property?",
          a: "No, unless there was an ouster or an agreement.",
          more: [
            "Picture it: Jill lives there alone. Jack can't bill her rent without an ouster or agreement.",
            "Co-tenants may agree to split rent proceeds unequally.",
          ],
        },
        {
          id: "jt", topic: "Concurrent ownership",
          q: "Joint tenancy: what's the right of survivorship?",
          a: "When a joint tenant dies, the share disappears and the survivors' shares grow, regardless of the will.",
          more: [
            "Picture it: A, B, and C own it. A dies and B and C each hold 50%, whatever A's will says.",
            "When only one is left, the joint tenancy ends.",
          ],
        },
        {
          id: "four-unities", topic: "Concurrent ownership", back: "Four unities",
          q: "What are the four unities of a joint tenancy?",
          elements: [
            "Time — interests acquired at the same time",
            "Title — from the same instrument",
            "Interest — the same type of interest",
            "Possession — an equal right to possess the whole",
          ],
          more: [
            "Picture it: Think of the joint tenants as one legal person: same time, title, interest, possession.",
            "Most states also require equal shares, and you must expressly say “joint tenancy.” Some states relax time and title.",
          ],
        },
        {
          id: "jt-vs-tic", topic: "Concurrent ownership",
          q: "O grants Blackacre “to A and B.” Joint tenancy or tenancy in common?",
          a: "Tenancy in common. To get a joint tenancy, you must satisfy the four unities and state that it's a joint tenancy.",
          more: [
            "Picture it: “To A and B” on its own: tenancy in common.",
          ],
        },
        {
          id: "sever-jt", topic: "Concurrent ownership",
          q: "How can a joint tenant sever the joint tenancy?",
          a: "Unilaterally, by transferring their share, even without telling the others. Destroying a unity severs, and the buyer becomes a tenant in common.",
          more: [
            "Picture it: B secretly sells to C. A is now a tenant in common with C and loses survivorship.",
            "A and B are joint tenants, B gives to C: A and C are tenants in common.",
            "Compare: <em>Harms</em>: a mortgage doesn't do this.",
          ],
        },
        {
          id: "severance-v-partition", topic: "Concurrent ownership", back: "Compare",
          q: "Severance vs. partition",
          elements: [
            "Severance — joint tenancy becomes tenancy in common. Still co-owners; survivorship ends",
            "Partition — co-owners (JT or TIC) end up with separate ownership",
          ],
        },
        {
          id: "harms", topic: "Concurrent ownership",
          q: "What is the key takeaway of <em>Harms v. Sprague</em>?",
          a: "In a lien-theory state, a mortgage by one joint tenant doesn't sever the joint tenancy. If the mortgagor dies first, the survivor takes the whole and the lien dies.",
          more: [
            "Picture it: John mortgages his half to the Simmonses without telling William, then dies. William ends up owning everything.",
            "Compare: A foreclosure before death would sever.",
          ],
          src: "Ill. 1984",
        },
        {
          id: "lien-title", topic: "Concurrent ownership", back: "Theories",
          q: "Lien theory vs. title theory of mortgages",
          elements: [
            "Lien theory — borrower keeps title, lender gets a lien; no severance (Illinois)",
            "Title theory — the mortgage transfers title to the lender, breaking unity of title; some courts find severance",
          ],
          more: [
            "Foreclosure during life ends the joint tenancy; the buyer becomes a tenant in common. The lender's real risk is the borrower dying first.",
          ],
        },
        {
          id: "tbie", topic: "Concurrent ownership",
          q: "Tenancy by the entirety",
          a: "A joint tenancy for married couples only (some states). Neither spouse can transfer or encumber alone; it ends only by agreement or divorce.",
          more: [
            "Picture it: A married couple: neither can sell alone.",
            "Five unities (the fifth is marriage). Originated to protect wives who couldn't own property.",
            "Compare: JT: B can sell secretly. Here no.",
          ],
        },
        {
          id: "community-property", topic: "Concurrent ownership",
          q: "Community property",
          a: "Property acquired by either spouse during marriage belongs to the community and is split 50/50. Transfer needs both spouses' approval.",
          more: [
            "Picture it: A salary earned during marriage goes into the pot and is split 50/50.",
            "A civil-law alternative to tenancy by the entirety. States have one or the other.",
          ],
        },
        {
          id: "cotenant-conflict", topic: "Concurrent ownership",
          q: "How does the law resolve co-tenant conflict, compared with future interests?",
          a: "Future interests: waste. Co-tenants: waste is disfavored, so the exit option is partition.",
          more: [
            "Picture it: A slob and a neat freak share an apartment.",
            "Compare: Waste handles conflict among successive owners.",
          ],
        },
        {
          id: "partition", topic: "Concurrent ownership", back: "Two forms",
          q: "Partition by sale vs. partition in kind",
          elements: [
            "By sale — court auctions the property and splits proceeds by shares",
            "In kind — court physically divides it in proportion to shares",
          ],
          more: [
            "Picture it: A house can't be split, so sell it. A big field can be divided.",
            "Any co-tenant can partition unilaterally. The law prefers partition in kind.",
            "Compare: <em>Delfino</em>.",
          ],
        },
        {
          id: "owelty", topic: "Concurrent ownership",
          q: "Owelty",
          a: "A payment from one co-tenant to another after a partition in kind, to equalize the value each receives.",
          more: [
            "Picture it: One half is worth more, so its owner pays the other the difference.",
          ],
        },
        {
          id: "delfino", topic: "Concurrent ownership",
          q: "What is the key takeaway of <em>Delfino v. Vealencis</em>?",
          a: "Partition in kind is preferred. Order a sale only if in-kind is impractical or inequitable and a sale better serves the owners' interests.",
          more: [
            "Picture it: A woman lives on the land and runs her garbage-hauling business there. The majority owners want an auction.",
            "Compare: <em>Harms</em> and severance are other ways out.",
          ],
          src: "Conn. 1980",
        },

        /* ── Leases ── */
        {
          id: "lease-vs-license", topic: "Leases",
          q: "Lease vs. license or easement",
          a: "A lease transfers possession, so the tenant can exclude others. A license or easement gives only a right to use.",
          more: [
            "Picture it: A party crasher shows up. A tenant can eject him. A guest can't.",
            "A tenant can eject a party crasher. A guest on a license can't.",
            "Compare: <em>Wood v. Leadbitter</em>.",
          ],
        },
        {
          id: "lease-types", topic: "Leases", back: "Four tenancies",
          q: "What are the four common-law leasehold types?",
          elements: [
            "Term of years — ends automatically on a set date",
            "Periodic tenancy — renews automatically each period",
            "Tenancy at will — no end date; either side may end it",
            "Tenancy at sufferance — a holdover; not really a lease",
          ],
        },
        {
          id: "term-of-years", topic: "Leases",
          q: "Term of years: why is the name misleading?",
          a: "It can be any fixed length (months, days). It ends automatically on the stated date.",
          more: [
            "Picture it: A two-day lease is still a term of years.",
          ],
        },
        {
          id: "periodic-notice", topic: "Leases",
          q: "How much notice ends a periodic tenancy?",
          a: "Usually notice equal to the period (month-to-month: one month). Year-to-year: six months at common law, one month by statute in most states.",
        },
        {
          id: "at-will", topic: "Leases",
          q: "Tenancy at will",
          a: "No set end date. Either party can end it any time for any reason, often with notice equal to the rent period.",
        },
        {
          id: "sufferance", topic: "Leases",
          q: "Tenancy at sufferance",
          a: "A holdover who stays after the lease ends. The landlord may evict (maybe not by self-help), and the holdover can't adversely possess.",
          more: [
            "Picture it: The lease ends Nov. 1 and the tenant is still there Nov. 2.",
            "Unlike a trespasser, the holdover's entry was lawful. Their possession isn't hostile, so no AP clock.",
            "Compare: AP: a holdover can't claim adversely.",
          ],
        },
        {
          id: "caveat-lessee", topic: "Leases",
          q: "Caveat lessee",
          a: "Default rule: tenant takes the premises as is. No implied warranty of fitness, and rent is owed even if the place proves unsuitable.",
          more: [
            "Picture it: A podcaster rents a place that turns out to be loud. Still owes rent.",
            "Parties can add an express warranty. Fraud is an exception.",
            "Compare: <em>Javins</em> reverses this for housing.",
          ],
        },
        {
          id: "caveat-mitigate", topic: "Leases", back: "Mitigating doctrines",
          q: "Which doctrines soften caveat lessee?",
          elements: [
            "Implied warranty of habitability — residential only (<em>Javins</em>)",
            "Constructive eviction — general (<em>Blackett</em>)",
            "Duty to mitigate — general (<em>Sommer</em>)",
          ],
        },
        {
          id: "javins", topic: "Leases",
          q: "What is the key takeaway of <em>Javins v. First National Realty</em>?",
          a: "Residential leases carry an implied warranty of habitability, defined by the housing code. Breach excuses rent, fully or partially.",
          more: [
            "Picture it: Tenants of Clifton Terrace in D.C. stop paying over code violations.",
            "Treats a lease like a contract. Mandatory (unwaivable) in most states, mostly by statute.",
            "Compare: <em>Sommer</em> and <em>Blackett</em> also treat leases like contracts.",
          ],
          src: "D.C. Cir. 1970",
        },
        {
          id: "javins-facts", topic: "Leases", tag: "Javins · facts",
          q: "In <em>Javins</em>, what did the tenants allege?",
          a: "Code violations that arose after move-in because the landlord wouldn't repair. They didn't allege defects at move-in, to avoid the illegal-lease doctrine.",
        },
        {
          id: "javins-why", topic: "Leases", back: "Court's rationales",
          q: "What four reasons did <em>Javins</em> give for an implied warranty?",
          elements: [
            "Tenant repair doesn't fit modern housing — tenants move often, and the landlord keeps the repair's benefit",
            "Consistency — consumer products already carry implied warranties",
            "Unequal bargaining power — standard terms and discrimination limit supply",
            "City-wide harm — poor housing hurts the whole city",
          ],
          more: [
            "Picture it: A repair lasts ten years. The tenant stays two.",
            "Compare: Same internalizing logic as takings.",
          ],
        },
        {
          id: "constructive-eviction", topic: "Leases", back: "Elements",
          q: "Constructive eviction",
          elements: [
            "Substantial interference — conduct interferes with the tenant's use and enjoyment",
            "Landlord responsible — for that conduct",
            "Vacate — the tenant must move out within a reasonable time",
          ],
          more: [
            "Picture it: A noisy neighbor makes the apartment unlivable, so you move out and stop paying.",
            "Effect: the tenant is treated as evicted, so no more rent.",
            "Compare: <em>Blackett</em>.",
          ],
        },
        {
          id: "blackett", topic: "Leases",
          q: "What is the key takeaway of <em>Blackett v. Olanoff</em>?",
          a: "A landlord is responsible for a loud club in the same building: the noise was a natural and probable consequence, and the landlord could control it.",
          more: [
            "Picture it: A disco opens next door. Its lease says “no noise heard outside,” and the landlord has to ask it to quiet down.",
            "Compare: Constructive eviction.",
          ],
          src: "Mass. 1977",
        },
        {
          id: "sommer", topic: "Leases",
          q: "What is the key takeaway of <em>Sommer v. Kridel</em>?",
          a: "A landlord must make reasonable efforts to re-let after the tenant breaches, and bears the burden of proving diligence.",
          more: [
            "Picture it: A cancelled wedding leaves an apartment empty for 16 months, and the landlord turns away a replacement.",
            "Compare: <em>Javins</em>: contract rules on leases.",
          ],
          src: "N.J. 1977",
        },
        {
          id: "mitigate-scope", topic: "Leases", tag: "Sommer · scope",
          q: "Is there a duty to mitigate in residential and commercial leases?",
          a: "Residential: majority rule, yes. Commercial: generally no, partly because the tenant may be larger and richer than the landlord.",
          more: [
            "Picture it: Starbucks leaves a small landlord's building: no duty to mitigate. A big complex re-lets your apartment: duty.",
            "The breaching tenant pays the landlord's reasonable re-letting costs.",
          ],
        },

        /* ── Takings ── */
        {
          id: "eminent-domain", topic: "Takings",
          q: "What is eminent domain?",
          a: "The government's power to take private property without the owner's consent. Limited by due process and the takings clause.",
          more: [
            "Picture it: A utility takes an easement for power lines.",
            "Federal and state governments hold it. States can delegate it to localities and to utilities, railroads, and sometimes individuals.",
            "Compare: <em>Kelo</em>.",
          ],
        },
        {
          id: "condemn-lingo", topic: "Takings", back: "Terms",
          q: "Condemnation, condemnor, condemnee",
          elements: [
            "Condemnation — the proceeding to take the property",
            "Condemnor — the taker (the government)",
            "Condemnee — the owner, who did nothing wrong",
          ],
        },
        {
          id: "takings-clause", topic: "Takings", back: "Two requirements",
          q: "What does the takings clause require?",
          elements: [
            "Public use",
            "Just compensation",
          ],
          more: [
            "“…nor shall private property be taken for public use, without just compensation.” Fifth Amendment; binds states (incorporated 1897). NY Const. art. I, § 7(a) is the state analogue.",
          ],
        },
        {
          id: "due-process-taking", topic: "Takings",
          q: "What does due process require before a taking?",
          a: "Notice to the owner and an opportunity to be heard, including to challenge the taking's legitimacy.",
        },
        {
          id: "thin-market", topic: "Takings",
          q: "Thick vs. thin market",
          a: "Thick: many buyers and sellers at any moment (Ford stock). Thin: few, so an owner looks like a monopolist and can't easily be replaced (real estate).",
          more: [
            "Picture it: Ford: 70 million shares trade daily. A Brooklyn Heights two-bedroom: rarely for sale.",
            "Compare: Edith Macefield.",
          ],
        },
        {
          id: "holdouts", topic: "Takings", back: "Types",
          q: "What three kinds of holdouts does eminent domain address?",
          elements: [
            "Strategic — owner tries to capture the project's surplus",
            "Stubborn — set in their ways",
            "High personal value — personally meaningful property (Radin)",
          ],
          more: [
            "Picture it: Edith Macefield refuses about $1 million, and the mall is built around her house.",
            "Fair market value caps the price, so the holdout gets market value, not the demand.",
            "Compare: The water holdout in the natural flow rule.",
          ],
        },
        {
          id: "taking-restrictions", topic: "Takings",
          q: "Why must the government pay for what it takes?",
          a: "Fairness (why should one owner bear the cost?) and internalizing: if it must pay, it takes only when the benefit outweighs the cost.",
          more: [
            "Picture it: NYC doesn't meter water, so nobody internalizes the cost of leaving the tap running.",
            "Compare: The internalizing card.",
          ],
        },
        {
          id: "public-use-history", topic: "Takings",
          q: "How has “public use” changed?",
          a: "From use by the public (highways, parks) to any public purpose or benefit, with great deference to legislatures.",
        },
        {
          id: "public-use-spectrum", topic: "Takings", back: "Spectrum",
          q: "What is the spectrum of public use?",
          elements: [
            "Clearly allowed — taking land to expand a military academy",
            "Middle (<em>Kelo</em>) — taking land for private companies in an economic development plan",
            "Clearly not allowed — taking from Joe to give to Bob",
          ],
        },
        {
          id: "midkiff", topic: "Takings",
          q: "What is the key takeaway of <em>Hawaii Housing Authority v. Midkiff</em>?",
          a: "Taking land from a few owners and transferring it to tenants is a public use: it eliminates the evils of a land oligopoly.",
          more: [
            "Picture it: Homeowners lease the ground under their houses from a handful of landowners. Hawaii breaks it up.",
            "Compare: <em>Berman</em> and <em>Kelo</em>. O'Connor wrote it and dissented in <em>Kelo</em>.",
          ],
          src: "U.S. 1984",
        },
        {
          id: "berman", topic: "Takings",
          q: "What is the key takeaway of <em>Berman v. Parker</em>?",
          a: "Condemning a blighted area, including an unblighted lot, for redevelopment partly by private parties is a valid public use.",
          more: [
            "Picture it: An unblighted lot inside a blighted D.C. area gets swept into redevelopment.",
            "Douglas: if D.C. decides the capital should be “beautiful as well as sanitary,” nothing in the Fifth Amendment stops it.",
            "Compare: <em>Javins</em>: bad housing hurts the whole city.",
          ],
          src: "U.S. 1954",
        },
        {
          id: "kelo", topic: "Takings",
          q: "What is the key takeaway of <em>Kelo v. City of New London</em>?",
          a: "A taking for private economic development is a public use if it serves a genuine public purpose under a comprehensive plan. Pretext isn't allowed.",
          more: [
            "Picture it: Wilhelmina Dery, born in her house in 1918, refuses to leave for a Pfizer-led plan.",
            "Compare: <em>Midkiff</em> and <em>Berman</em>.",
          ],
          src: "U.S. 2005",
        },
        {
          id: "kelo-reasons", topic: "Takings", back: "Reasoning",
          q: "Why did <em>Kelo</em> uphold the taking?",
          elements: [
            "Public access test unworkable — a school, a military base",
            "Precedent — <em>Midkiff</em> and <em>Berman</em> had no public access",
            "Economic development — no principled way to separate it from other public purposes",
            "Federalism — deference to states; they may add limits",
            "The plan as a whole — not lot by lot; not pretextual",
          ],
        },
        {
          id: "kelo-oconnor", topic: "Takings", tag: "Kelo · dissent",
          q: "What is Justice O'Connor's dissent in <em>Kelo</em>?",
          a: "Takings for other private owners are inherently problematic. Any property is vulnerable (“any Motel 6 for a Ritz-Carlton”), and the winners tend to be the politically powerful.",
          more: [
            "Picture it: A Motel 6 replaced by a Ritz-Carlton.",
          ],
        },
        {
          id: "kelo-distinguish", topic: "Takings", tag: "Kelo · dissent",
          q: "How does O'Connor distinguish <em>Berman</em> and <em>Midkiff</em> from <em>Kelo</em>?",
          a: "Those takings eliminated an affirmative harm (blight, a land oligopoly). Kelo only sought more business.",
          more: [
            "Counter: lack of economic opportunity may be a harm too.",
            "Compare: O'Connor wrote <em>Midkiff</em>.",
          ],
        },
        {
          id: "kelo-thomas", topic: "Takings", tag: "Kelo · dissent",
          q: "What is Justice Thomas's concern in his <em>Kelo</em> dissent?",
          a: "Takings have historically been used against minority owners (“bad neighborhood” often means disfavored racial groups). The NAACP filed an amicus brief raising this.",
        },
        {
          id: "kelo-aftermath", topic: "Takings",
          q: "What happened after <em>Kelo</em>?",
          a: "Many states amended constitutions or enacted statutes barring such takings. The New London project collapsed and the land stayed vacant.",
          more: [
            "Picture it: Pfizer left in 2010, and Kelo's house was moved and now has a plaque.",
            "Supports the federalism point: states can go beyond the federal minimum.",
            "Compare: Edith Macefield's house.",
          ],
        },
        {
          id: "miller-principles", topic: "Takings", back: "Four principles",
          q: "What are the four just-compensation principles of <em>United States v. Miller</em>?",
          elements: [
            "Owner's loss, not taker's gain",
            "Fair market value",
            "Exclude value idiosyncratic to the owner",
            "Valuation date is the date of the taking",
          ],
          more: [
            "Picture it: Shasta Dam: the railroad had to be relocated, so land was taken.",
          ],
          src: "U.S. 1943",
        },
        {
          id: "miller-loss", topic: "Takings", tag: "Miller · principle 1",
          q: "Does the government's gain from a taking affect compensation?",
          a: "No. The owner gets the value lost, even if the taker makes $100 billion.",
          more: [
            "Picture it: A $1,000 property: the owner gets $1,000 even if the taker earns $100 billion.",
          ],
        },
        {
          id: "fmv", topic: "Takings", tag: "Miller · principle 2",
          q: "What is fair market value in a taking?",
          a: "The cash price a willing buyer would pay a willing seller. It's an estimate, not an exact science.",
          more: [
            "Picture it: Ford stock: look up the price. A parcel nobody trades: educated guess.",
            "Built-in oddity: there is no willing seller, so some undercompensation is likely.",
          ],
        },
        {
          id: "idiosyncratic-value", topic: "Takings", tag: "Miller · principle 3",
          q: "Is value unique to the owner included in compensation?",
          a: "No. Only value to buyers generally counts, so a backyard skate ramp or Oval Office replica adds nothing.",
          more: [
            "A feature counts only if other buyers would pay for it (a stable in Kentucky, not Midtown).",
          ],
        },
        {
          id: "taking-date", topic: "Takings", tag: "Miller · principle 4",
          q: "As of what date is property valued in a taking?",
          a: "The date of the taking, because market values fluctuate.",
        },
        {
          id: "financing-irrelevant", topic: "Takings",
          q: "Does the owner's mortgage affect compensation?",
          a: "No. Financing is excluded; value is fair market value.",
        },
        {
          id: "partial-taking", topic: "Takings",
          q: "What is owed when the government takes part of a parcel?",
          a: "Fair market value of the part taken plus severance damages for the loss in value of the remainder.",
          more: [
            "Picture it: A highway takes a strip of a farm. Pay for the strip plus the farm's loss of value.",
            "Large parcels are worth more per acre, so shrinking one hurts.",
          ],
        },
        {
          id: "regulatory-taking", topic: "Takings",
          q: "What is a regulatory taking?",
          a: "A regulation that goes too far is treated as a taking, so compensation is owed. Often that kills the regulation, since the government can't pay.",
          more: [
            "Picture it: The Kohler Act bans mining that would collapse houses.",
            "Same as inverse condemnation. Police power is the usual source of regulation.",
            "Compare: <em>Penn Central</em>.",
          ],
        },
        {
          id: "inverse-condemnation", topic: "Takings",
          q: "Inverse condemnation",
          a: "The owner sues to force the government to pay, claiming a regulation is a taking. In ordinary condemnation, the government starts the proceeding.",
        },
        {
          id: "reg-varieties", topic: "Takings", back: "Two kinds",
          q: "Two kinds of regulatory takings",
          elements: [
            "Ad hoc — case by case; most common",
            "Per se (categorical) — certain government acts are automatically takings; very few",
          ],
        },
        {
          id: "reg-conceptual", topic: "Takings",
          q: "Why can a regulation be a taking if the government takes no land?",
          a: "Property is a bundle of rights. Taking one stick may need compensation, as it would if bought privately. Maybe, maybe not.",
          more: [
            "Picture it: Taking just the right to build: one stick from the bundle.",
            "Compare: <em>Penn Central</em> and TDRs.",
          ],
        },
        {
          id: "penn-coal", topic: "Takings",
          q: "What is the key takeaway of <em>Pennsylvania Coal v. Mahon</em>?",
          a: "If a regulation goes too far it's a taking. How far is a question of degree, decided ad hoc. The Kohler Act took the coal company's support right.",
          more: [
            "Picture it: A mining company buys away the coal and the support. Later a law bans mining that collapses houses.",
            "Compare: <em>Penn Central</em> comes 50 years later.",
          ],
          src: "U.S. 1922",
        },
        {
          id: "penn-coal-factors", topic: "Takings", back: "Factors",
          q: "What three factors did <em>Pennsylvania Coal</em> use?",
          elements: [
            "Diminution in value — how big a drop",
            "Public nuisance — is it preventing a harm to the public (police power)",
            "Average reciprocity of advantage — is the burden offset by shared benefit",
          ],
        },
        {
          id: "baseline", topic: "Takings",
          q: "What is the baseline problem in <em>Pennsylvania Coal</em>?",
          a: "What is the denominator for diminution? Holmes: just the support right, so 100% lost. Brandeis: all the coal, so a small fraction.",
          more: [
            "Picture it: Is the loss the support right (100%) or all the coal (small)?",
            "Strong Holmes reading makes every regulation a 100% taking. Answer: support was a separate common-law right (surface, subsurface, support).",
            "Compare: <em>Penn Central</em> picks the whole parcel.",
          ],
        },
        {
          id: "reciprocity", topic: "Takings",
          q: "Average reciprocity of advantage",
          a: "A burden is offset when everyone else is burdened the same way and you benefit from that. Points against a taking.",
          more: [
            "City life, covenants in a development. None in <em>Pennsylvania Coal</em>: the burden fell on the coal company, the benefit on residents.",
            "Compare: Covenants in a development and <em>Campbell</em>'s “city life” line.",
          ],
        },
        {
          id: "reciprocity-brandeis", topic: "Takings", tag: "Reciprocity · Brandeis",
          q: "Why did Brandeis say reciprocity didn't matter?",
          a: "Reciprocity applies only when a regulation provides a benefit, not when it prevents a harm. That benefit/harm line is controversial, since you can describe either as the other.",
        },
        {
          id: "pc-nuisance-split", topic: "Takings", tag: "Penn Coal · nuisance",
          q: "How did Holmes and Brandeis differ on public nuisance?",
          a: "Holmes: not a nuisance, since notice would protect the public. Brandeis: a noxious use, since notice doesn't save the surface land from collapsing.",
          more: [
            "Picture it: “Heads up, we're digging out the pillars.” Is that enough?",
          ],
        },
        {
          id: "penn-central", topic: "Takings",
          q: "What is the key takeaway of <em>Penn Central v. City of New York</em>?",
          a: "New York's landmark law barring a 55-story tower atop Grand Central was not a regulatory taking. No compensation was owed.",
          more: [
            "Picture it: A Breuer concrete tower perched on top of Grand Central.",
            "Compare: <em>Pennsylvania Coal</em>.",
          ],
          src: "U.S. 1978",
        },
        {
          id: "penn-central-factors", topic: "Takings", back: "Factors",
          q: "What three factors did <em>Penn Central</em> use?",
          elements: [
            "Economic impact — diminution in value, measured against the whole parcel",
            "Distinct investment-backed expectations — specific, not vague hopes",
            "Character of the government action — physical invasion vs. adjusting burdens and benefits",
          ],
          more: [
            "Compare: Diminution in value overlaps with <em>Pennsylvania Coal</em>.",
          ],
        },
        {
          id: "pc-denominator", topic: "Takings", tag: "Penn Central · factor 1",
          q: "<em>Penn Central</em> factor 1: economic impact. What does it ask?",
          a: "How much value the regulation destroys, measured against the whole parcel, not just the part that was blocked.",
          more: [
            "Picture it: Grand Central's land, terminal and airspace counted together. The terminal still ran at a reasonable return, so the impact wasn't severe.",
            "TDRs reduce the impact: the unused height can be sold to neighbors.",
            "Compare: Holmes in <em>Pennsylvania Coal</em> measured only the support right, so 100% lost. Whole parcel vs. one stick is the denominator fight.",
          ],
        },
        {
          id: "pc-expectations", topic: "Takings", tag: "Penn Central · factor 2",
          q: "<em>Penn Central</em> factor 2: distinct investment-backed expectations. What counts?",
          a: "A specific expectation, held when you acquired the property, that you spent money relying on. Vague hopes (“someday I'd build a tower”) don't count.",
          more: [
            "Picture it: Penn Central's real expectation was running a train terminal, and it still could. A 22-story addition in keeping with the building might even have been approved.",
            "Strongest for an owner who bought for a use the law allowed at the time and spent on it.",
          ],
        },
        {
          id: "pc-character", topic: "Takings", tag: "Penn Central · factor 3",
          q: "<em>Penn Central</em> factor 3: character of the government action. How does it cut?",
          a: "A physical invasion points toward a taking. A program that adjusts the burdens and benefits of economic life for the common good, like zoning or landmark laws, points away.",
          more: [
            "Picture it: soldiers moving into your house vs. a citywide rule limiting what you can build.",
            "Rehnquist's dissent: singling out one lone landmark looks less like broad burden-sharing. Compare average reciprocity of advantage in <em>Pennsylvania Coal</em>.",
          ],
        },
        {
          id: "tdr", topic: "Takings",
          q: "Transferable development rights (TDRs)",
          a: "Landmarked owners can sell unused building height to neighbors, who may then build taller than zoning allows.",
          more: [
            "Zoning caps at 20; a landmarked 12-story building can't add 8, so it sells them. The neighbor builds 28. TDRs counted as compensation in <em>Penn Central</em>.",
            "Compare: Not air rights (<em>Hinman</em>).",
          ],
        },
        {
          id: "pc-dissent", topic: "Takings",
          q: "What was Rehnquist's dissent in <em>Penn Central</em>?",
          a: "Use <em>Pennsylvania Coal</em>'s factors: no nuisance, no average reciprocity (a lone landmark), and the law transferred a servitude to the city, so it should pay.",
          more: [
            "Picture it: Grand Central is the lone landmark. Brooklyn Heights is a whole district.",
            "He also argued the cost is small if spread across all New Yorkers. That failed: NYC was nearly bankrupt.",
            "Compare: <em>Pennsylvania Coal</em>'s factors.",
          ],
        },
        {
          id: "takings-factors-which", topic: "Takings", back: "Which case?",
          q: "Regulatory takings factors: which come from <em>Pennsylvania Coal</em> and which from <em>Penn Central</em>?",
          elements: [
            "<em>Pennsylvania Coal</em> (1922) — diminution in value; public nuisance; average reciprocity of advantage",
            "<em>Penn Central</em> (1978) — economic impact; distinct investment-backed expectations; character of the government action",
          ],
          more: [
            "Carryover: diminution in value lives on as <em>Penn Central</em>'s economic impact.",
            "Trap: reciprocity belongs to <em>Pennsylvania Coal</em>. Rehnquist's <em>Penn Central</em> dissent wanted it back: Grand Central was a lone landmark, not a district sharing the burden.",
          ],
        },
        {
          id: "pcoal-vs-pcentral", topic: "Takings", back: "Compare",
          q: "<em>Pennsylvania Coal</em> vs. <em>Penn Central</em>: why opposite results?",
          a: "Both ask whether a regulation went too far. <em>Pennsylvania Coal</em> measured the loss against the one right that was blocked (support: 100% gone), so it was a taking. <em>Penn Central</em> measured against the whole parcel, which stayed usable, so it wasn't.",
          more: [
            "Picture it: coal the company can never mine vs. Grand Central still running as a terminal, with unused height it can sell as TDRs.",
            "Takeaway: the denominator often decides the case.",
          ],
        },
      ],
    },

    /* ══════════════════════ CRIMINAL LAW ═════════════════════════ */
    {
      id: "crim", name: "Criminal Law", short: "Crim",
            cards: [
        /* ── Mental state ── */
        {
          id: "reckless-vs-negligent", topic: "Mental state", back: "Dividing line",
          q: "Recklessness vs. negligence: what separates them?",
          a: "Awareness. Recklessness: D actually perceived the risk and consciously disregarded it. Negligence: D should have perceived it but didn't.",
          more: [
            "Both require a substantial and unjustifiable risk and a gross deviation from how a reasonable (or law-abiding) person would act.",
            "“Should have known” is the negligence standard. Don't use it to prove recklessness.",
            "Awareness of the general risks of an activity isn't awareness of the specific risk at the moment of the conduct.",
            "Proof of awareness: D's own words, training, warnings, and what D did right before and after.",
            "If D's statements show D didn't perceive the risk, lead with negligence as the stronger charge, not the fallback.",
          ],
        },
        {
          id: "willful-blindness", topic: "Mental state", back: "Rule",
          q: "Willful blindness",
          a: "Awareness of a high probability that a fact exists, plus deliberately avoiding confirmation, counts as knowledge, unless D actually believes the fact doesn't exist.",
          more: [
            "Suspicion alone is only recklessness. Willful blindness is what closes the gap to knowledge.",
            "Proof (receiving stolen property): a price far below value, a suspicious place or seller, “don't ask.”",
            "Defense: doubting a seller's pitch isn't suspecting theft; a low price can be hard bargaining.",
            "Check for a dealer presumption (a dealer buying far below reasonable value).",
          ],
        },
        {
          id: "intoxication", topic: "Mental state", back: "Rules",
          q: "Voluntary vs. involuntary intoxication",
          elements: [
            "Purpose or knowledge crimes — voluntary intoxication evidence may negate the element (MPC, NY), so intentional murder can fail",
            "Recklessness — no help: a person unaware of a risk only because of voluntary intoxication is treated as reckless",
            "Involuntary (coerced, tricked, prescribed, pathological) — a complete defense only if it destroyed the capacity to appreciate or conform, an insanity-like test",
          ],
          more: [
            "A drunk killer who couldn't form intent: intentional murder fails, reckless homicide remains.",
            "Some states bar intoxication evidence entirely, and that's constitutional (<em>Montana v. Egelhoff</em>).",
            "Medication taken as prescribed is usually not self-induced.",
          ],
        },

        /* ── Causation ── */
        {
          id: "superseding-cause", topic: "Causation", back: "Test",
          q: "When does another person's choice break the causal chain?",
          a: "Only when it's independent, free and informed. The question is whether the intervening event flows from the risk D created.",
          elements: [
            "Responsive act (victim flees, desperate maneuver, rescue, medical care) — doesn't break the chain",
            "Coincidence unrelated to the risk (ambulance crash) — breaks it",
            "Free, deliberate, informed act of another person — the strongest chain-breaker",
            "A choice D requested, paid for or equipped — not independent of D, so it doesn't break the chain as to D",
          ],
          more: [
            "The same choice can be independent as to one defendant and not as to another.",
            "For an accomplice, the answer runs through complicity: D is legally accountable for the principal's conduct, so that conduct can't be D's superseding cause.",
            "A death can have more than one proximate cause.",
          ],
        },
        {
          id: "thin-skull", topic: "Causation", back: "Two steps",
          q: "Thin-skull (eggshell) victim: does it settle liability?",
          a: "No. It settles causation only: take the victim as you find them. D still needs the mental state the charge requires.",
          more: [
            "Keep causation and mental state as two separate steps.",
            "Single punch causing death: argue awareness from circumstances (hard surface, curb), concede a jury could disagree, fall back to negligent homicide.",
            "A victim's refusal of treatment usually doesn't break the chain either.",
          ],
        },

        /* ── Act and omission ── */
        {
          id: "omission-elements", topic: "Omission", back: "Elements",
          q: "Omission liability",
          elements: [
            "Legal duty — statute, special relationship, contract, voluntary assumption of care, or creation of the peril",
            "Physically capable of the omitted act",
            "Mental state — measured at the time of the omission",
            "Causation — proof beyond a reasonable doubt that the act would have prevented the result",
          ],
          more: [
            "The grade follows the mental state: didn't realize = negligent homicide; knew and ignored = manslaughter; on purpose = murder.",
            "A duty to call for help isn't a duty to physically rescue. A safe phone call defeats a danger exception.",
            "“A real chance” or “might have survived” isn't proof that help would have saved the victim. Concede it, then fall back to attempt by omission or a duty-to-report offense.",
            "Don't call an omission an act. Liability rests on the omission plus a duty.",
          ],
        },
        {
          id: "separate-units", topic: "Omission", back: "Method",
          q: "An act followed by an omission (or a change in what D knows): how do you analyze it?",
          a: "Split them into separate units of conduct. Each gets its own act or omission, mental state, causation and concurrence.",
          more: [
            "A mental state that appears later attaches only to the later unit. Never back-date it.",
            "If the harmful moment was involuntary (sleep, seizure), look earlier for a voluntary act that set it up.",
          ],
        },

        /* ── Homicide ── */
        {
          id: "check-the-result", topic: "Homicide", back: "First check",
          q: "Before charging homicide, what do you check first?",
          a: "That the victim actually died. “Shot,” “injured” and “could go either way” mean attempt and assault, with one line on what happens if the victim dies.",
        },
        {
          id: "depraved-indifference", topic: "Homicide", back: "Test",
          q: "When is a known-risk killing murder rather than manslaughter?",
          a: "When the recklessness shows extreme (depraved) indifference to human life: a very high risk of death, taken for little or no reason, with callousness.",
          more: [
            "If the facts show death wasn't D's goal (“hopefully they get out”), skip intentional murder. Depraved indifference is the murder theory.",
            "Defense: hoping the victim escapes, or acting to save a life, is the opposite of indifference. Fall back to manslaughter.",
          ],
        },
        {
          id: "transferred-intent", topic: "Homicide", back: "Rule",
          q: "Transferred intent",
          a: "Intent to kill A carries over to B when B is killed instead. No awareness of any risk to B is needed.",
          more: [
            "Recklessness toward bystanders is a separate, backup theory. Keep the two apart.",
            "Don't forget the intended target: attempted murder of A.",
          ],
        },
        {
          id: "eed-part-1", topic: "Homicide", tag: "EED · part 1", back: "Both sides",
          q: "EED part 1: was D actually under an extreme emotional disturbance?",
          more: [
            "Defense: a sudden, chaotic scene; D snapped in the moment and didn't plan.",
            "Prosecution: the facts show calculation, not loss of control. Strategic reasoning (“can't risk it”) sounds like clear thinking.",
          ],
        },
        {
          id: "eed-part-2", topic: "Homicide", tag: "EED · part 2", back: "Both sides",
          q: "EED part 2: was there a reasonable explanation or excuse?",
          a: "Judged from the viewpoint of a person in D's situation, under the circumstances as D believed them to be.",
          more: [
            "Defense: anyone in D's position could be overwhelmed. The standard is partly subjective.",
            "Prosecution: D's situation can't include D's own guilt. Fear of being caught for D's own crime shouldn't reduce murder.",
            "An affirmative defense (D proves it). Success reduces murder to manslaughter, not acquittal.",
          ],
        },
        {
          id: "provocation", topic: "Homicide", back: "Rule",
          q: "Heat of passion vs. EED",
          elements: [
            "Heat of passion (common law) — adequate provocation from a recognized category, actual passion, no time to cool, causal link",
            "EED (NY, MPC) — broader: no fixed categories, no cooling-off rule, reasonable explanation from D's viewpoint",
          ],
          more: [
            "Finding a spouse in bed with someone, then killing immediately, is the textbook provocation case.",
            "When the facts show provocation, make mitigation the main event, not an afterthought.",
            "Words alone usually aren't adequate provocation (<em>Girouard</em>).",
          ],
        },
        {
          id: "felony-murder", topic: "Homicide", back: "Elements",
          q: "Felony murder",
          elements: [
            "A listed felony, committed or attempted — D is a participant, including as an accomplice",
            "A non-participant dies",
            "D or another participant causes the death",
            "In the course of and in furtherance of the felony, or immediate flight from it",
          ],
          more: [
            "No mental state as to the death is needed. D's belief that no one would be hurt is irrelevant.",
            "Non-slayer affirmative defense: every element must be met. When the felony itself kills (a fire), aiding the felony is aiding the homicidal act.",
            "A facilitator isn't a participant, so felony murder doesn't reach a facilitator.",
            "Always run the ordinary homicide ladder too, in case felony murder fails.",
            "Check timing: a death after the felony ended may fall outside it.",
          ],
        },

        /* ── Attempt and inchoate ── */
        {
          id: "attempt-tests", topic: "Attempt", back: "Tests",
          q: "Substantial step vs. proximity",
          elements: [
            "Dangerous proximity — what's left to do: did D come dangerously close? (<em>Rizzo</em>)",
            "Substantial step (MPC) — what's already done: is it strongly corroborative of criminal purpose?",
            "Completed attempt — D did everything planned; only the result failed",
          ],
          more: [
            "MPC examples: lying in wait or searching for the victim; luring the victim; reconnoitering; unlawful entry; materials for the crime at or near the scene; soliciting an innocent agent.",
            "Prove purpose first, list what D did, match it to the examples, then give the defense's preparation argument.",
          ],
        },
        {
          id: "attempt-reckless", topic: "Attempt", back: "Rule",
          q: "Can you attempt a reckless or negligent crime?",
          a: "No. Attempt requires purpose as to the result, so there's no attempted reckless homicide.",
          more: [
            "Fallbacks when no one died: assault (serious injury, depraved indifference) or reckless endangerment.",
          ],
        },
        {
          id: "impossibility", topic: "Attempt", back: "Which way does the mistake run?",
          q: "Mistake of fact vs. factual impossibility vs. legal impossibility",
          elements: [
            "Mistake of fact — D thinks it's innocent, but it isn't: may negate the mental state",
            "Factual impossibility — D thinks it's a crime, but the means fail (empty pocket, unloaded gun): no defense",
            "Legal impossibility (imaginary crime) — D thinks it's a crime, but no law forbids it: no liability",
          ],
        },
        {
          id: "renunciation", topic: "Attempt", back: "Elements",
          q: "Renunciation (abandonment)",
          elements: [
            "Voluntary — not motivated by fear of detection or increased difficulty",
            "Complete — not a postponement or a switch to another victim or method",
          ],
          more: [
            "Usually an affirmative defense (D proves it).",
            "What matters is D's motivation, even if the perceived risk was imaginary.",
            "Argue the attempt threshold first, then abandonment.",
          ],
        },
        {
          id: "solicitation-vs-attempt", topic: "Inchoate", back: "Rule",
          q: "Why is hiring a killer solicitation, not attempt?",
          a: "The solicitor isn't moving toward the crime. Another free agent still has to decide to act, so the request is preparation. Solicitation is complete the moment the request is made.",
          more: [
            "It becomes attempt when the solicitor does more: pays, supplies the victim's schedule, unlocks the door.",
            "Using an innocent agent counts as attempt.",
            "Vague requests: infer the object from context (words, earlier conduct, motive), and give the lesser object as a fallback. The object sets the grade.",
          ],
        },
        {
          id: "one-inchoate", topic: "Inchoate", back: "MPC rule",
          q: "Solicitation, conspiracy and attempt for the same crime: how many convictions?",
          a: "Under the MPC, charge all of them, but D can be convicted of only one inchoate offense for conduct aimed at the same crime.",
          more: [
            "The MPC also bars convicting D of both conspiracy and the completed object crime. At common law, conspiracy doesn't merge.",
          ],
          src: "MPC §§ 5.05(3), 1.07(1)(b)",
        },

        /* ── Complicity and conspiracy ── */
        {
          id: "accomplice-elements", topic: "Complicity", back: "Elements",
          q: "Accomplice liability",
          elements: [
            "Aid or encouragement",
            "Purpose of promoting or facilitating the offense — not just purpose to do the helpful act",
            "For result crimes — the culpability the offense requires as to the result (so a reckless accomplice is possible)",
          ],
          more: [
            "Liability runs through complicity, not causation.",
            "Knowledge alone usually isn't enough (<em>Peoni</em>). A minority accept it for serious crimes (<em>Backun</em>). Facilitation statutes fill the gap.",
            "A helper who didn't know of the plan isn't an accomplice, and there's no negligence fallback.",
            "Handing keys to a drunk driver: charge the key-giver as a principal first, complicity second (<em>McVay</em> vs. <em>Etzweiler</em>).",
          ],
        },
        {
          id: "unwilling-unknowing", topic: "Complicity", back: "Rule",
          q: "Can you be an unwilling or unknowing accomplice?",
          elements: [
            "Unknowing — no; the main actor is liable through the innocent agent",
            "Unwilling — yes; coercion doesn't erase purpose, it's handled by duress",
          ],
          more: [
            "Motive isn't purpose. “I helped to avoid exposure” is a motive, and can still be purpose to facilitate.",
            "The strongest no-purpose evidence is indifference: “I'm not part of this,” “I don't want to know.”",
          ],
        },
        {
          id: "complicity-vs-conspiracy", topic: "Complicity", back: "Distinction",
          q: "Complicity vs. conspiracy",
          elements: [
            "Complicity — an imputation rule: D is guilty of the crime itself; needs a crime by someone else",
            "Conspiracy — an inchoate offense with its own grade: agreement plus purpose (plus an overt act in most codes); complete without the crime",
          ],
          more: [
            "Code tell: “legally accountable” with no grade = imputation; “guilty of conspiracy” with its own grade = inchoate.",
            "Pinkerton makes conspirators liable for co-conspirators' foreseeable crimes. The MPC rejects it and sends the question to complicity.",
            "Facilitation is its own offense with its own grade, not imputation, so a facilitator isn't a felony-murder participant.",
            "Unilateral conspiracy (MPC, NY): an agreement with a feigning undercover officer still counts.",
          ],
        },

        /* ── Defenses ── */
        {
          id: "duress", topic: "Defenses", back: "Elements",
          q: "Duress",
          elements: [
            "A threat of unlawful physical force against D or another person (including family)",
            "That a person of reasonable firmness couldn't resist",
            "Imminence — required at common law and in NY; the MPC drops strict imminence",
            "D didn't recklessly put themselves in the situation",
          ],
          more: [
            "Threats to expose, report or embarrass D don't count.",
            "Often unavailable for murder (common law). The MPC and NY allow it; check the code.",
            "Excuses only the coerced conduct, not what D did before the threat.",
            "Usually an affirmative defense (D proves it).",
          ],
        },
        {
          id: "mistaken-self-defense", topic: "Defenses", back: "Outcomes",
          q: "Honest but mistaken self-defense",
          elements: [
            "Reasonable belief — full defense (most states)",
            "Honest but unreasonable belief — imperfect self-defense reduces murder to manslaughter (common law)",
            "MPC — if the belief was reckless or negligent, D is still liable for the reckless or negligent offense",
          ],
          more: [
            "A justifying fact D didn't know about doesn't help (unknowing justification).",
            "Each use of force is its own unit. Force after the threat ends needs its own justification.",
          ],
        },
        {
          id: "necessity-life", topic: "Defenses", back: "Rule",
          q: "Necessity when D kills an innocent person to save D's own life",
          a: "One life for one life rarely “clearly outweighs” (<em>Dudley & Stephens</em>). The MPC allows the defense in principle.",
          more: [
            "Elements: imminent harm, no fault in creating it, greater harm avoided, no reasonable alternative.",
            "Best argument: D chose a risk to the other person over near-certain death for D, as a last resort.",
            "In NY, the court decides as a matter of law whether the facts could support the defense.",
          ],
        },
        {
          id: "mistake-of-law", topic: "Defenses", back: "Rule",
          q: "Is relying on a lawyer's advice a defense?",
          a: "Generally no. Mistake of law excuses only reasonable reliance on an official statement of the law (a statute, court decision, or the responsible agency's interpretation) that later proves wrong.",
        },

        /* ── Theft ── */
        {
          id: "theft-deprive", topic: "Theft", back: "Rule",
          q: "Theft: does intending to return the property defeat it?",
          a: "Usually yes. Traditional theft requires intent to deprive permanently or for an extended period. Check how the code defines “deprive.”",
          more: [
            "Short-term taking without permission may fit a separate offense (unauthorized use of a vehicle).",
            "Check whose property it was and whether there was permission.",
          ],
        },
                       /* ── Justification ── */
        {
          id: "necessity-meaning", topic: "Justification", back: "Three parts",
          q: "Lesser evils: what makes conduct “necessary”?",
          elements: [
            "Time — waiting would let the harm happen or come too late",
            "Degree — no lawful or less harmful option would do the job",
            "Efficacy — reasonably expected to work, judged when D acts, not by how it turned out",
          ],
          more: [
            "A firebreak that fails when the wind shifts was still necessary.",
            "<em>Demetrius</em>: nothing tied the men to a known bomb plot, so there was no reason to expect torture to stop one.",
            "Burke (#76) must show the drug would actually help.",
          ],
        },
        {
          id: "lesser-evils-greater", topic: "Justification", back: "Rule",
          q: "Lesser evils: how much greater must the harm avoided be?",
          a: "Strictly greater than the harm the offense targets. A tie loses (MPC § 3.02(1)(a)).",
          more: [
            "One life for one life fails: no taking an innocent's only life preserver on a sinking ship.",
            "Killing an unjustified aggressor is different: the law's disapproval of aggression tips the scale.",
            "The community's view sets the balance, not D's. Burke being sure doesn't matter.",
          ],
        },
        {
          id: "who-balances", topic: "Justification", back: "Who decides",
          q: "Who strikes the balance of harms?",
          elements: [
            "Public authority, defensive force — the legislature already did: “neither the defendant nor a jury is permitted to strike the balance differently”",
            "Lesser evils — the jury, applying the community's view, where the legislature hasn't spoken",
            "The defendant — never, under any justification",
          ],
          more: [
            "Where the legislature has addressed the situation, the jury can't rebalance lesser evils either.",
          ],
        },
        {
          id: "preemption", topic: "Justification", back: "Three forms",
          q: "Legislative preemption of lesser evils",
          elements: [
            "Offense exceptions — the legislature listed exceptions and D's situation isn't one (<em>Bice</em>: liquor in church for medicine)",
            "A specific defense covers the situation — D can't use the general one to get around its limits",
            "A plain legislative purpose to exclude the defense — MPC § 3.02(1)(c)",
          ],
          more: [
            "Burke: the FDA's delegated judgment banning IIR outside the study counts as the legislature's.",
            "Civil disobedience: no defense against a lawfully made policy.",
          ],
        },
        {
          id: "demetrius-bar", topic: "Justification", tag: "Demetrius", back: "Both sides",
          q: "Demetrius: does lawful authority's torture bar also block necessity?",
          more: [
            "Prosecution: § 22(4)(b) shows the legislature already ruled torture unjustifiable; the specific controls the general.",
            "Prosecution: § 39's only exception is punishing convicts, not interrogation (like <em>Bice</em>).",
            "Defense: § 22(4)(b) says “nothing in <em>this section</em>” and § 24 has no such bar, so the legislature chose not to write one there.",
          ],
        },
        {
          id: "lesser-evils-trigger", topic: "Justification", back: "Rule",
          q: "Lesser evils trigger: what interests count?",
          a: "Any interest the law hasn't specifically rejected, not just ones it expressly protects. Promoting a good can count, not only averting a harm.",
          more: [
            "Speeding to see a dying mother one last time: no legal right, but the interest isn't rejected.",
            "Revenge or getting high: rejected, so no trigger.",
            "Glaucoma marijuana: “promoting health” or “preventing blindness,” same act. It then loses on preemption.",
          ],
        },
        {
          id: "against-justification", topic: "Justification", back: "Theories",
          q: "Theories that reject or narrow a lesser-evils defense",
          elements: [
            "Legislative supremacy — the legislature already weighed it (<em>Southwark</em>: “a door which no man could shut”)",
            "Deontology — some acts can't be offset by outcomes (<em>Dudley & Stephens</em>; torture in <em>Demetrius</em>)",
            "Rule-consequentialism — every defendant thinks theirs was the lesser evil",
            "Democratic process — lawful alternatives always exist (civil disobedience)",
            "Excuse, not justification — blameless, but not right (England's duress of circumstances)",
          ],
        },
        {
          id: "burke-rule", topic: "Justification", tag: "Burke (#76)", back: "Why he may lose",
          q: "Burke: two lives vs. one burglary. Why isn't it easy?",
          a: "A justification is a rule for everyone in his position, so the comparison is a rule allowing break-ins against the lives it saves.",
          more: [
            "Break-ins could drain trial supplies and muddy the data, costing future patients' lives.",
            "The two lives count only as much as an experimental drug's chance of working.",
            "He likely loses anyway on FDA preemption, efficacy and timing (he isn't declining).",
          ],
        },

        /* ── Public authority ── */
        {
          id: "hymon-necessary", topic: "Public authority", tag: "Hymon", back: "Both sides",
          q: "Hymon (§ 40-808, “all the necessary means”): was the shot necessary?",
          more: [
            "He did try other things: yelled “Police! Halt!”, sent Wright around the fence, stepped forward.",
            "Necessity doesn't require trying alternatives first. It asks whether a less harmful one would have worked.",
            "Prosecution: necessary “to effect the arrest,” not that night. He saw Garner's face; Garner was unarmed, a $10 burglary.",
            "Defense: in 1974, necessity was measured against escape right now (fleeing-felon rule).",
          ],
        },
        {
          id: "hymon-bouie", topic: "Public authority", tag: "Hymon", back: "Rule",
          q: "Does <em>Bouie</em> stop a jury from finding Hymon's shot unnecessary?",
          a: "No. <em>Bouie</em> bars an unforeseeable new legal rule after the fact (like reading in a dangerousness limit), not a finding that this shot wasn't “necessary” on these facts.",
        },
        {
          id: "garner", topic: "Public authority", back: "Holding",
          q: "<em>Tennessee v. Garner</em> (1985)",
          a: "Deadly force to stop a fleeing suspect violates the Fourth Amendment unless the officer has probable cause the suspect threatens serious physical harm, with a warning where feasible.",
          more: [
            "Binds every officer, but it's a limit on government, not a crime.",
            "Can't convict Hymon: it came 11 years after the shooting (<em>Bouie</em>).",
            "Criminal use runs through statutes: 18 U.S.C. § 242 (willful deprivation of rights, e.g. Chauvin), or state codes rewritten to match.",
          ],
        },
        {
          id: "training", topic: "Public authority", back: "Rule",
          q: "Does an officer's training make a shooting lawful?",
          a: "No. Authority comes from the law, not the employer. Training is only evidence.",
          more: [
            "Necessity: torso-aim training shows what was realistic.",
            "Culpability: following procedure cuts against gross negligence (<em>Copeland</em>: misadventure vs. manslaughter).",
            "Under MPC § 3.07, Hymon fails anyway: he believed Garner was unarmed.",
          ],
        },

        /* ── Defensive force ── */
        {
          id: "ny-35-15-2", topic: "Defensive force", back: "Statute",
          q: "NY § 35.15(2) (1984): when is deadly force allowed?",
          elements: [
            "(a) He reasonably believes the other “is using or about to use deadly physical force” — but not if he knows he can retreat “with complete safety,” except in his dwelling (not the initial aggressor) or as an officer",
            "(b) He reasonably believes the other “is committing or attempting to commit a kidnapping, forcible rape, forcible sodomy, or robbery”",
            "(c) He reasonably believes the other “is committing or attempting to commit a burglary, and the circumstances are such that the use of deadly physical force is authorized”",
          ],
          more: [
            "Subdivision (2) applies “under circumstances specified in subdivision one,” so force must still be reasonably believed “necessary.”",
          ],
        },
        {
          id: "goetz-prosecution", topic: "Defensive force", tag: "Goetz", back: "Prosecution's arguments",
          q: "Goetz: the prosecution's best arguments",
          more: [
            "Provocation (1)(a) is weak: the youths approached and demanded money; asking them to repeat didn't cause it.",
            "(2)(b): “How are ya?” then $5 was panhandling, not forcible stealing. Hard, since four surrounded him.",
            "(1) necessity: a bulge and a hand in a pocket; he never saw a weapon.",
            "Strongest: the last shot at a seated Cabey, “Here's another.” Each shot needs its own necessity.",
          ],
          src: "<em>People v. Goetz</em> (N.Y. 1986): “reasonably believes” is objective, a reasonable person in Goetz's situation",
        },
        {
          id: "forcible-rape", topic: "Defensive force", back: "Why the word matters",
          q: "Why “forcible” rape in § 35.15(2)(b)?",
          a: "Much rape needs no force: statutory (age), incapacity, physical helplessness. “Forcible” limits deadly force to rape by forcible compulsion, a violent emergency.",
          more: [
            "Same for “forcible sodomy.”",
            "Rule against surplusage: assume every word does work.",
          ],
        },
        {
          id: "rape-sodomy", topic: "Defensive force", back: "History",
          q: "Why did NY list rape and sodomy separately?",
          a: "Common-law rape was vaginal intercourse by force with a woman not one's wife. Sodomy was a separate “crime against nature,” criminal even if consensual.",
          more: [
            "So § 35.15 needed both to cover forced oral or anal assault and male victims.",
            "Consensual sodomy struck down (<em>Onofre</em>, 1980); renamed “criminal sexual act” (2003); rape redefined to include oral and anal (2024).",
          ],
        },
        {
          id: "robbery-deadly", topic: "Defensive force", back: "Comparison",
          q: "Can you use deadly force against a robber?",
          elements: [
            "NY (1984) — yes: robbery is listed in (2)(b), no separate fear of death needed",
            "MPC — not for robbery alone: § 3.04(2)(b) lists death, serious injury, kidnapping and forced intercourse; § 3.06(3)(d) needs deadly force or serious danger",
            "Pennsylvania, New Jersey — follow the MPC list",
            "Texas, Florida — broader (Texas lists robbery; Florida any “forcible felony”)",
          ],
        },
        {
          id: "property-deadly", topic: "Defensive force", back: "Rule",
          q: "Deadly force to protect property",
          a: "Not for property alone. NY § 35.25 allows only force “other than deadly physical force” against larceny or criminal mischief.",
          more: [
            "Robbery, carjacking and dwelling burglary aren't just property crimes: each involves force or danger to a person.",
            "Florida stretches it: deadly force against any “forcible felony,” which includes burglary of a car.",
          ],
        },
        {
          id: "defensive-universal", topic: "Defensive force", back: "Near-universal",
          q: "Defensive force: rules almost every jurisdiction shares",
          elements: [
            "Necessity — force stops when the threat stops",
            "Some immediacy — no striking first against a future threat",
            "Proportionality — deadly force only against serious threats",
            "Unlawful force only — no defending against lawful force",
            "Initial aggressors and provokers lose it — unless they withdraw",
            "No retreat from your own home; no spring guns",
          ],
          more: [
            "Splits: retreat outside the home, resisting an unlawful arrest, defense-of-others standard, unreasonable belief, burden of proof.",
          ],
        },

        /* ── Mistaken justification ── */
        {
          id: "jahnke-imminence", topic: "Mistaken justification", tag: "Jahnke", back: "Both sides",
          q: "Jahnke: should imminence defeat him?",
          more: [
            "Imminence does two jobs: the threat might not come, and alternatives exist (Kinports).",
            "For Jahnke: a real, recurring threat; the sheriff sent everyone home and the beatings resumed.",
            "Against: one report; told to leave that night; an ambush from the dark garage; “revenge.”",
            "Robinson's kidnap hypo: act at the only real chance, even if not this second.",
          ],
        },
        {
          id: "jahnke-routes", topic: "Mistaken justification", tag: "Jahnke", back: "Routes away from murder",
          q: "Jahnke: ways to avoid a murder conviction",
          elements: [
            "Wyoming — a reasonable belief judged from his situation (<em>Foley</em>, <em>Harries</em>): full defense",
            "Wyoming — heat of passion (<em>Helton</em>): voluntary manslaughter",
            "MPC § 3.09(2) — reckless or negligent belief: manslaughter or negligent homicide",
            "MPC § 210.3(1)(b) — extreme emotional disturbance: manslaughter",
            "MPC § 2.09 duress (Dressler) — a person of reasonable firmness couldn't resist",
          ],
        },
        {
          id: "dressler-kinports", topic: "Mistaken justification", back: "Comparison",
          q: "Dressler vs. Kinports on battered people who kill",
          elements: [
            "Dressler — not justified, but excusable through MPC duress; rejects syndrome-based justification and “he deserved it” forfeiture",
            "Kinports — ordinary self-defense works: imminence's purposes are met; use “battering and its effects,” not “syndrome”",
          ],
          more: [
            "Both reject murder for a case like Judy Norman's. They split on “right” vs. “forgivable.”",
          ],
        },

        /* ── Excuses ── */
        {
          id: "disabilities", topic: "Excuses", back: "What counts",
          q: "The disability excuses",
          elements: [
            "Insanity",
            "Subnormality — low intelligence, run through the insanity test as a “defect”",
            "Involuntary intoxication only — voluntary never excuses, however severe",
            "Immaturity — an age cut-off, not an individual test",
            "Duress — coercion is a weak disability, so it needs a threat a person of reasonable firmness couldn't resist",
          ],
          more: [
            "A disability alone never excuses. It must cause a severe enough excusing condition (<em>Mriglot</em>).",
            "<em>Jamison</em>: mental age 11.7 but 17 years old, so no immaturity defense.",
          ],
        },
        {
          id: "psychopathy-exclusion", topic: "Excuses", back: "Rule",
          q: "MPC § 4.01(2): the psychopathy exclusion",
          a: "Excludes any abnormality “manifested only by repeated criminal or otherwise anti-social conduct.”",
          more: [
            "It's about evidence, not labels: kleptomania shown only by shoplifting, or a paraphilia shown only by offenses, is out too.",
            "Repeat offending proves a pattern, not an inability to stop.",
            "Evidence beyond the conduct gets past (2), but still has to meet the cognitive or control prong, which these rarely do.",
          ],
        },
        {
          id: "ngri-gbmi", topic: "Excuses", back: "Comparison",
          q: "NGRI vs. GBMI",
          elements: [
            "NGRI (not guilty by reason of insanity) — did the act, excused; usually committed until no longer dangerous (Hinckley spent decades at St. Elizabeths)",
            "GBMI (guilty but mentally ill) — convicted and sentenced; the illness affects only treatment",
          ],
          more: [
            "NY: insanity is an affirmative defense (D proves it). MPC: the prosecution disproves it once raised.",
          ],
        },

        /* ── Mistake of law ── */
        {
          id: "three-mistakes", topic: "Mistake of law", back: "Sort it first",
          q: "Three kinds of mistake",
          elements: [
            "Negates an element — taking an umbrella you think is yours; works even for a mistake of non-criminal law",
            "As to justification — taking a backpack you believe holds a bomb",
            "About the criminal law itself — you know what you're doing, not that it's a crime; the maxim bars it",
          ],
        },
        {
          id: "marrero", topic: "Mistake of law", tag: "Marrero", back: "Why he lost",
          q: "Marrero: why no defense under § 15.20(2)(a)?",
          a: "The statute wasn't wrong; his reading of it was. A federal prison guard read “any penal correctional institution” to include Danbury and carried a loaded .38 without a NY permit.",
          more: [
            "If a reasonable misreading counted, everyone would claim it: the exception would swallow the rule.",
            "His best point: NY dropped the MPC's “afterward determined to be invalid or erroneous.”",
            "The gun dealer's advice doesn't count: he isn't an official.",
          ],
        },
        {
          id: "mpc-2-04-3", topic: "Mistake of law", back: "Two exceptions",
          q: "MPC § 2.04(3): when does a mistake of law excuse?",
          elements: [
            "Unavailable law — not known to D and not published or reasonably made available (<em>The Cotton Planter</em>)",
            "Official misstatement — reasonable reliance on an official statement later found invalid or erroneous: statute, court decision, administrative order, or official interpretation",
          ],
          more: [
            "D proves it by a preponderance.",
            "Estoppel, not blamelessness: relying on someone you wrongly thought was an official gets nothing.",
            "Sophie (#99): the ordinance was published, and officials refused to answer, which isn't a misstatement.",
          ],
        },
        {
          id: "nj-mistake", topic: "Mistake of law", back: "Elements",
          q: "New Jersey's general mistake-of-law excuse",
          elements: [
            "Diligently pursues all means available to learn the law",
            "Honestly and in good faith concludes the conduct is lawful",
            "A law-abiding and prudent person would also conclude so",
            "D proves it by clear and convincing evidence",
          ],
          more: [
            "Sophie: arguable. Her group, who just relied on her, is weaker.",
            "The Al-Saidy grooms (#101): no inquiry at all, so it fails.",
          ],
        },
        {
          id: "fletcher-kahan", topic: "Mistake of law", back: "Comparison",
          q: "Fletcher vs. Kahan on “ignorance is no excuse”",
          elements: [
            "Fletcher — excuse reasonable mistakes: the law is too vast to know; an excuse leaves the rule intact; punishing the innocent for the common good uses people as means",
            "Kahan — keep the maxim: people who know the law exactly exploit its gaps, so the only safe course is to be good; explains the <em>malum prohibitum</em> exception",
          ],
        },

        /* ── Nonexculpatory ── */
        {
          id: "nonexculpatory", topic: "Nonexculpatory", back: "Definition",
          q: "Exculpatory vs. nonexculpatory defenses",
          a: "Exculpatory defenses clear D of blame (justifications, excuses). Nonexculpatory ones free a fully blameworthy D because another public interest outweighs punishing.",
          more: [
            "Examples: statutes of limitation, speedy trial, diplomatic and governmental immunity, double jeopardy, incompetency, entrapment.",
            "Justification weighs the conduct's harm against what it avoided. Nonexculpatory weighs punishing D against an unrelated interest.",
          ],
        },
        {
          id: "statute-of-limitations", topic: "Nonexculpatory", back: "Rationales",
          q: "Statutes of limitation: why have them?",
          elements: [
            "Old evidence is unreliable — the main reason",
            "The offender may have reformed",
            "Deterrence weakens with time",
            "Community outrage fades",
          ],
          more: [
            "Against: DNA and video don't fade; murder has no limit; these factors could be weighed case by case instead.",
          ],
        },
      ],
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
