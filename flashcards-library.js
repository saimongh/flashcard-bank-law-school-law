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
        /* ═══ added: final-exam completion (Nov 23) ═══ */

        /* ── First possession, commons, finders ── */
        {
          id: "ghen", topic: "Possession",
          q: "What is the key takeaway of <em>Ghen v. Rich</em>?",
          a: "Custom can decide ownership of a wild animal. Under the whaling custom, “iron holds the whale”: the whale belongs to whoever first dealt the mortal wound.",
          more: [
            "Facts: Ghen's lance killed a fin-back that sank and washed up miles away. Ellis found it and sold it to Rich. Ghen wins.",
            "Consistent with <em>Pierson</em>'s mortal-wound rule.",
          ],
          src: "D. Mass. 1881",
        },
        {
          id: "ghen-why", topic: "Possession", tag: "Ghen · reasoning",
          q: "Why did <em>Ghen</em> bind Ellis and Rich, who were outside the whaling trade and didn't know the custom?",
          a: "They knew or should have known someone in the business killed the whale, and should have asked (constructive notice).",
          more: [
            "Why custom at all: killing is the only act of appropriation possible, so without it the industry would cease.",
          ],
        },
        {
          id: "keeble", topic: "Possession",
          q: "What is the key takeaway of <em>Keeble v. Hickeringill</em>?",
          a: "Maliciously disrupting someone's lawful use of their own land for profit is actionable, even though no bird was ever in their possession.",
          more: [
            "Facts: Hickeringill fired guns to scare ducks off Keeble's decoy pond. The wrong is the disruption, not lost ducks (<em>ratione soli</em>).",
          ],
          src: "Q.B. 1707",
        },
        {
          id: "keeble-compete", topic: "Possession", tag: "Keeble · reasoning",
          q: "Why wasn't Hickeringill's conduct just competition?",
          a: "He harmed Keeble's pond out of malice instead of building a better pond. No social benefit, and society lost.",
        },
        {
          id: "commons", topic: "Possession",
          q: "What is the tragedy of the commons?",
          a: "A resource open to all gets overused, because each user keeps the benefit and spreads the cost.",
          more: [
            "Overutilization tragedy. There's an underutilization tragedy too.",
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
        },
        {
          id: "internalize", topic: "Possession",
          q: "Internalizing vs. externalizing costs",
          a: "Internalize: you bear the cost or get the benefit of your choice. Externalize: others do.",
          more: [
            "Drunk driving: risk to yourself is internalized; risk to others is externalized. People decide on internalized costs only.",
          ],
        },
        {
          id: "armory", topic: "Finders",
          q: "What is the key takeaway of <em>Armory v. Delamirie</em>?",
          a: "A finder has a right to possession good against everyone except the true owner, so a finder can sue a later wrongdoer.",
          more: [
            "Facts: a chimney sweep's boy found a jewel. A goldsmith's apprentice kept the stones and returned the socket.",
          ],
          src: "K.B. 1722",
        },
        {
          id: "armory-damages", topic: "Finders", tag: "Armory · damages",
          q: "How did <em>Armory</em> value the missing jewel?",
          a: "The jury was told to assume the best jewel that would fit the socket unless D produced it. That forces D to produce it (information forcing).",
        },
        {
          id: "relativity", topic: "Finders",
          q: "Relativity of title",
          a: "Ownership is a ranking between the two parties in court. The plaintiff only has to show a better claim than the defendant, not ownership against the world.",
          more: [
            "Consequence: no <em>jus tertii</em>. A defendant can't win by pointing to a third party's better right.",
          ],
        },
        {
          id: "absolute-special", topic: "Finders", back: "Definitions",
          q: "Absolute property vs. special property",
          elements: [
            "Absolute — good against all the world",
            "Special — good against all the world except the true owner (a finder's right)",
          ],
        },
        {
          id: "clark-maloney", topic: "Finders",
          q: "What is the key takeaway of <em>Clark v. Maloney</em>?",
          a: "The first finder beats a later finder. A finder's rights survive losing the item.",
          more: [
            "Facts: Clark moored logs set loose by a flood. They drifted off and Maloney took them. Any other rule leads to endless chaotic captures.",
          ],
        },

        /* ── Water ── */
        {
          id: "natural-flow", topic: "Water",
          q: "Natural flow rule",
          a: "No one may take enough water for downstream owners to notice. Everyone is entitled to the same undiminished flow.",
          more: [
            "Exceptions: all downstream owners consent, or rights are sold. Problem: assembling everyone (a holdout problem).",
          ],
        },
        {
          id: "water-weaknesses", topic: "Water", back: "Weak spots",
          q: "Weakness of each western-vs-eastern water rule",
          elements: [
            "Reasonable use — what's reasonable varies by place and era",
            "Prior appropriation — “beneficial use” is vague (courts have been generous)",
          ],
        },

        /* ── Adverse possession ── */
        {
          id: "ap-actual", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “actual” possession?",
          a: "Using the land the way a normal owner would. Maintaining and managing it supports the claim.",
        },
        {
          id: "ap-exclusive", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “exclusive” possession?",
          a: "Not sharing possession with others, especially not the true owner.",
        },
        {
          id: "ap-open", topic: "Adverse possession", tag: "AP · element",
          q: "AP: what is “open and notorious” possession?",
          a: "The true owner had adequate notice (inquiry notice counts) and a chance to stop it.",
        },
        {
          id: "scott", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Scott v. Anderson-Tully</em>?",
          a: "On wild, unimproved land, sparse but visible acts of ownership (marking, logging, leasing) can be enough.",
          more: [
            "Facts: a 20-acre wedge. Anderson-Tully painted the fence line, logged three times in 40 years, and issued hunting leases.",
            "Trap: a fence alone proves nothing, and paying taxes alone doesn't establish ownership.",
          ],
          src: "Miss. 2015",
        },
        {
          id: "carpenter", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Carpenter v. Ruperto</em>?",
          a: "Iowa requires good faith. Someone who knows the land isn't theirs can't adversely possess it.",
          more: [
            "Facts: she used a neighbor's strip for 30 years, knowing it wasn't hers. Most states (the Connecticut rule) ignore state of mind, so she wins elsewhere.",
          ],
          src: "Iowa 1982",
        },
        {
          id: "carpenter-line", topic: "Adverse possession", tag: "Carpenter · line",
          q: "Where does <em>Carpenter</em> draw the good-faith line?",
          a: "“I mistakenly thought it was mine” is fine. “I knew I had no right” is a squatter. Knowing your title is merely defective is also fine.",
        },
        {
          id: "howard-kunto", topic: "Adverse possession",
          q: "What is the key takeaway of <em>Howard v. Kunto</em>?",
          a: "Continuity is judged by how an owner of that kind of property normally uses it, and a chain of good-faith owners can tack even with wrong deeds.",
          more: [
            "Facts: summer cabins whose deeds all described the neighbor's lot. Seasonal use counted.",
          ],
          src: "Wash. 1970",
        },
        {
          id: "tacking", topic: "Adverse possession",
          q: "Tacking",
          a: "Adding earlier possessors' time to yours to reach the statutory period. It requires privity between successive possessors.",
          more: [
            "Usually a deed. <em>Howard</em> accepted a physical handoff by innocent purchasers.",
          ],
        },

        /* ── Right to exclude ── */
        {
          id: "jacque", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Jacque v. Steenberg Homes</em>?",
          a: "Nominal damages can support punitive damages for an intentional trespass to land. Losing the right to exclude is itself an injury.",
          more: [
            "Facts: Steenberg plowed across the Jacques' field after repeated refusals. $1 nominal plus $100,000 punitive.",
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
        },
        {
          id: "ad-coelum", topic: "Right to exclude",
          q: "What is <em>ad coelum</em> and how do the cases treat it?",
          a: "Whoever owns the soil owns up to the heavens and down to the depths. <em>Hinman</em> rejects it for airspace. <em>Edwards</em> arguably keeps it underground.",
          more: [
            "Absurdity: you can't own the infinite, and the earth spins. “The law makes long spokes of the short stakes of men.”",
          ],
        },
        {
          id: "edwards-lee", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Edwards v. Lee's Administrator</em>?",
          a: "Ownership runs down whether or not the owner uses the space. Lee owned the cave under his land and shared in the profits, with no access or use.",
          more: [
            "Facts: Edwards ran the Great Onyx Cave as a tourist attraction. Opposite of <em>Hinman</em>'s use-based rule for air.",
          ],
          src: "Ky. 1936",
        },
        {
          id: "bundle", topic: "Right to exclude",
          q: "Bundle of rights",
          a: "Property is a collection of separable rights (possess, use, exclude, dispose). You can lack some and still have property. The hard question is which are essential.",
          more: [
            "Contrast Blackstone's essentialist “sole and despotic dominion.”",
          ],
        },
        {
          id: "dominion", topic: "Right to exclude",
          q: "Dominion",
          a: "Exclusive control enough to keep everyone else out. Land can be dominated. Air and sea can only be used.",
          more: [
            "<em>Hinman</em>: dominion is the “essence and origin” of a property right.",
          ],
        },
        {
          id: "moore", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Moore v. Regents</em>?",
          a: "No conversion: cells removed from a patient's body aren't his property. But he can sue for breach of fiduciary duty and lack of informed consent.",
          more: [
            "Facts: Dr. Golde removed Moore's spleen, secretly used the cells for research, and patented the cell line.",
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
        },
        {
          id: "moore-dissent", topic: "Right to exclude", tag: "Moore · dissent",
          q: "What was Justice Mosk's dissent in <em>Moore</em>?",
          a: "Property is a bundle. Losing some sticks (can't keep the tissue) isn't losing all, so Moore should control commercial use.",
          more: [
            "Irony: the defendants say Moore can't own his tissue, but they can.",
          ],
        },
        {
          id: "baker-hunt", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Baker v. Howard County Hunt</em>?",
          a: "Equity can enjoin a pattern of repeated trespass even if no single trespass would justify it. The landowner's right beats the hunt's tradition.",
          more: [
            "Facts: foxhounds repeatedly ran over Baker's farm. He shot three in his chicken yard, then sued for an injunction.",
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
            "Baker still had clean hands: the shooting was defense of property, not mere trespass.",
          ],
        },
        {
          id: "self-help", topic: "Right to exclude",
          q: "How much force may an owner use against a trespasser?",
          a: "Reasonable force to end the trespass (bouncers do this). Lethal force is never allowed just to stop a trespass.",
        },
        {
          id: "injunction-v-punitive", topic: "Right to exclude",
          q: "Injunction vs. punitive damages: what's the difference in reach?",
          a: "An injunction is in personam: it stops this defendant, enforced by contempt. Punitive damages deter trespassers generally, including non-parties.",
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
            "Facts: the foundation was about an inch over the line, and removal meant tearing out the wall. <em>Golden Press</em> is the modern, balancing rule.",
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
            "Damages here are a one-time payment, so the result works like a permanent easement.",
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
        },
        {
          id: "ploof", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Ploof v. Putnam</em>?",
          a: "Necessity (saving life and property from a sudden peril) privileges entering another's land. Unmooring the boat was actionable.",
          more: [
            "Facts: a storm on Lake Champlain. Ploof tied up at Putnam's dock and Putnam's servant cast the sloop loose.",
          ],
          src: "Vt. 1908",
        },
        {
          id: "incomplete-privilege", topic: "Right to exclude",
          q: "Incomplete privilege (<em>Vincent v. Lake Erie</em>)",
          a: "A privilege to enter by necessity doesn't excuse damage. The entrant still pays for harm caused by the entry and presence.",
        },
        {
          id: "uston", topic: "Right to exclude",
          q: "What is the key takeaway of <em>Uston v. Resorts International</em>?",
          a: "A casino can't exclude a patron just for lawful card counting. The right to exclude yields to reasonable access for places open to the public.",
          more: [
            "Uston wasn't disruptive, and the regulations didn't ban counting. “Reasonable” is decided case by case.",
          ],
          src: "N.J. 1982",
        },
        {
          id: "uston-rule", topic: "Right to exclude", tag: "Uston · rule",
          q: "What principle explains how much public access an owner must allow?",
          a: "The more private property is devoted to public use, the more public accommodation is required.",
          more: [
            "Prof. Lee's restatement (not the court's): the more the owner profits from public access, the more accommodation owed.",
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
            "Facts: a 1911 covenant on a St. Louis block. A Black family bought from a willing seller and neighbors sued to enforce.",
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
        },
        {
          id: "fha-exceptions", topic: "Right to exclude", tag: "FHA · exceptions", back: "Exceptions",
          q: "What does the Fair Housing Act not reach?",
          elements: [
            "Mrs. Murphy exception — a small multi-family home where the owner lives (but not advertising)",
            "Roommate selection — not a “dwelling” in the narrow sense, to avoid constitutional problems",
          ],
          more: [
            "Roommates are an intimate relationship: size, purpose, selectivity, others excluded from critical aspects.",
          ],
        },

        /* ── Bailments, abandonment, transfer ── */
        {
          id: "mcglynn", topic: "Bailments",
          q: "Park-and-lock: how does the majority (<em>McGlynn</em>) decide if there's a bailment?",
          a: "It skips dominion and control and asks where a duty of care should fall. Garage operators owe customers reasonable care.",
          more: [
            "Why: the operator is expected to protect the cars, so the loss shouldn't fall on the consumer. A ticket disclaimer fails unless shown to have been brought to the driver's attention.",
          ],
          src: "N.J. 1981",
        },
        {
          id: "abandon-real", topic: "Abandonment",
          q: "Can you abandon real property?",
          a: "No. Real property must always have an owner.",
          more: [
            "Why: confusion over who owns it, unpaid taxes, and externalities on neighbors from neglected property.",
          ],
        },
        {
          id: "escheat", topic: "Abandonment",
          q: "Escheat",
          a: "Property (often money) with no activity for a long time reverts to the state as abandoned.",
        },
        {
          id: "eyerman", topic: "Abandonment",
          q: "What is the key takeaway of <em>Eyerman v. Mercantile Trust</em>?",
          a: "A will's direction to destroy property won't be enforced on public policy grounds when it's capricious, serves no purpose, and harms neighbors, the community, and the estate.",
          more: [
            "Facts: the will ordered a St. Louis house razed. The court barred only the razing; the sale and the gift of the proceeds went ahead.",
          ],
        },
        {
          id: "eyerman-why", topic: "Abandonment", tag: "Eyerman · reasoning",
          q: "Why can a living owner raze her house but a will can't order it?",
          a: "A living owner is checked by self-interest. A dead testator bears no cost, so only the court is a check. Inheritance is also a state-granted privilege that can carry conditions.",
          more: [
            "Restatement (Second) of Trusts § 124: a trust to throw money into the sea is unenforceable.",
          ],
        },
        {
          id: "eyerman-dissent", topic: "Abandonment", tag: "Eyerman · dissent",
          q: "What is the dissent's critique in <em>Eyerman</em>?",
          a: "Judicial activism: courts shouldn't invent public policy. The record gave no motive, the beneficiaries and city weren't complaining, and the landmark came after her death.",
        },
        {
          id: "alienation", topic: "Transfer",
          q: "Can a grantor forbid the grantee from ever transferring the property?",
          a: "No. You can place conditions on a transfer, but restraints on alienation are not enforceable.",
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
            "A and B co-own and A sells to C: C co-owns with B. Selling the Brooklyn Bridge gives the buyer nothing. The good-faith purchaser doctrine is an exception.",
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
            "Torrens is the rest of the world's system. Minneapolis–St. Paul uses it.",
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
            "Record and inquiry notice are both constructive notice.",
          ],
        },
        {
          id: "boundary-systems", topic: "Transfer", back: "Systems",
          q: "Metes and bounds vs. rectangular survey",
          elements: [
            "Metes and bounds — landmarks and directions; breaks when landmarks move or vanish",
            "Rectangular survey — a grid by latitude and longitude; costlier to set up, used today",
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
            "Both are servitudes: durable and able to run with the land. They make sense because land can't move.",
          ],
        },
        {
          id: "affirmative-negative", topic: "Servitudes",
          q: "Affirmative vs. negative easement",
          a: "Affirmative: the dominant owner may do something on the servient land. Negative: the servient owner is barred from doing something otherwise allowed.",
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
            "Runs only for the grantee over the grantor's land. The seller who landlocks herself gets nothing (<em>Schwab</em>).",
          ],
        },
        {
          id: "tulk", topic: "Covenants",
          q: "What is the key takeaway of <em>Tulk v. Moxhay</em>?",
          a: "It created the equitable servitude: a buyer who knew of a restriction can be enjoined from violating it, even without privity.",
          more: [
            "Facts: a London square with a statue and iron railing, sold with a promise to keep it a garden. The buyer knew and wanted to build.",
          ],
          src: "Ch. 1848",
        },
        {
          id: "pricing-in", topic: "Covenants",
          q: "“Pricing in”",
          a: "A buyer who knows an item's disadvantages can factor them into the price. If the law then removes the disadvantage, the buyer gets a windfall.",
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
            "Locality matters: “a right thing in the wrong place” (<em>Euclid</em>). City life's ordinary noise and dirt must be tolerated.",
          ],
        },
        {
          id: "campbell-seaman", topic: "Nuisance",
          q: "What is the key takeaway of <em>Campbell v. Seaman</em>?",
          a: "A brickyard's sulfurous gas was a nuisance even though it blew over only on certain days. Coming to the nuisance and prescription didn't defeat it.",
          more: [
            "Facts: gas killed Campbell's trees. No estoppel, because he protested throughout.",
          ],
          src: "N.Y. 1876",
        },
        {
          id: "nuisance-balancing", topic: "Nuisance",
          q: "How is a private nuisance balanced (<em>Hendricks v. Stalnaker</em>)?",
          a: "An interference is unreasonable when the gravity of the harm outweighs the social value of the activity causing it.",
          more: [
            "Factors: extent and character of harm, social value of D's use, suitability to the locality, how avoidable the harm was.",
          ],
        },
        {
          id: "coming-nuisance", topic: "Nuisance",
          q: "Is “coming to the nuisance” a defense?",
          a: "Rarely. It would let the first user control neighbors' land and spur wasteful races to be first.",
          more: [
            "If accepted, the later arrival loses. Good faith vs. spite, public interest, and estoppel or acquiescence also matter.",
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
            "Under Restatement (Second), the court weighs the social value of the nuisance against the value of the use it harms.",
          ],
        },

        /* ── Future interests and waste ── */
        {
          id: "fsa", topic: "Future interests",
          q: "Fee simple absolute",
          a: "The largest ownership package; every other estate is carved out of it. A grant “to B” is presumed a fee simple absolute.",
          more: [
            "“To Jones and his heirs” means the same, because a living person has no heirs, only heirs apparent.",
          ],
        },
        {
          id: "life-estate", topic: "Future interests",
          q: "Life estate",
          a: "Ownership that ends at a person's death. “To Jones for life.”",
          more: [
            "If Jones sells, the buyer's life estate ends at Jones's death (<em>pur autre vie</em>). <em>Nemo dat</em>.",
          ],
        },
        {
          id: "pur-autre-vie", topic: "Future interests",
          q: "<em>Pur autre vie</em>",
          a: "“For the life of another.” An interest measured by someone else's life.",
          more: [
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
            "Contrast a life estate: the event (death) is certain, only its timing is uncertain.",
          ],
        },
        {
          id: "fsd", topic: "Future interests",
          q: "How do you create a fee simple determinable?",
          a: "Durational language (“as long as,” “while,” “until”). The grantor holds a possibility of reverter, and the property returns automatically.",
          more: [
            "“To Huxley College as long as it's used for instruction.”",
          ],
        },
        {
          id: "fsscs", topic: "Future interests",
          q: "How do you create a fee simple subject to condition subsequent?",
          a: "Conditional language (“but if,” “on condition that”). The grantor holds a right of entry and must act to retake it.",
          more: [
            "“To A, but if marijuana is inhaled on the premises, O may re-enter.”",
          ],
        },
        {
          id: "fssel", topic: "Future interests",
          q: "What makes a fee simple subject to executory limitation?",
          a: "A third party, not the grantor, takes when the event happens. That party holds an executory interest, which cuts off the prior owner.",
          more: [
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
        },
        {
          id: "remainder", topic: "Future interests",
          q: "Remainder",
          a: "A future interest in a third party that takes when a prior estate, such as a life estate, ends naturally.",
          more: [
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
            "Conflict arises because dividing property across time divides interests. Ordinary wear and tear is not waste.",
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
            "Facts: the will gave the mansion for life to George. The court read the intent as the residence, not just the land.",
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
            "Today's presumption for a grant to A and B, even if the four unities are present.",
          ],
        },
        {
          id: "tic-rent", topic: "Concurrent ownership",
          q: "Can a tenant in common demand rent from a co-tenant who occupies the property?",
          a: "No, unless there was an ouster or an agreement.",
          more: [
            "Co-tenants may agree to split rent proceeds unequally.",
          ],
        },
        {
          id: "jt", topic: "Concurrent ownership",
          q: "Joint tenancy: what's the right of survivorship?",
          a: "When a joint tenant dies, the share disappears and the survivors' shares grow, regardless of the will.",
          more: [
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
            "Most states also require equal shares, and you must expressly say “joint tenancy.” Some states relax time and title.",
          ],
        },
        {
          id: "jt-vs-tic", topic: "Concurrent ownership",
          q: "O grants Blackacre “to A and B.” Joint tenancy or tenancy in common?",
          a: "Tenancy in common. To get a joint tenancy, you must satisfy the four unities and state that it's a joint tenancy.",
        },
        {
          id: "sever-jt", topic: "Concurrent ownership",
          q: "How can a joint tenant sever the joint tenancy?",
          a: "Unilaterally, by transferring their share, even without telling the others. Destroying a unity severs, and the buyer becomes a tenant in common.",
          more: [
            "A and B are joint tenants, B gives to C: A and C are tenants in common.",
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
            "Facts: John mortgaged his half and died. William, the survivor, took everything; the lender lost its security.",
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
            "Five unities (the fifth is marriage). Originated to protect wives who couldn't own property.",
          ],
        },
        {
          id: "community-property", topic: "Concurrent ownership",
          q: "Community property",
          a: "Property acquired by either spouse during marriage belongs to the community and is split 50/50. Transfer needs both spouses' approval.",
          more: [
            "A civil-law alternative to tenancy by the entirety. States have one or the other.",
          ],
        },
        {
          id: "cotenant-conflict", topic: "Concurrent ownership",
          q: "How does the law resolve co-tenant conflict, compared with future interests?",
          a: "Future interests: waste. Co-tenants: waste is disfavored, so the exit option is partition.",
        },
        {
          id: "partition", topic: "Concurrent ownership", back: "Two forms",
          q: "Partition by sale vs. partition in kind",
          elements: [
            "By sale — court auctions the property and splits proceeds by shares",
            "In kind — court physically divides it in proportion to shares",
          ],
          more: [
            "Any co-tenant can partition unilaterally. The law prefers partition in kind.",
          ],
        },
        {
          id: "owelty", topic: "Concurrent ownership",
          q: "Owelty",
          a: "A payment from one co-tenant to another after a partition in kind, to equalize the value each receives.",
        },
        {
          id: "delfino", topic: "Concurrent ownership",
          q: "What is the key takeaway of <em>Delfino v. Vealencis</em>?",
          a: "Partition in kind is preferred. Order a sale only if in-kind is impractical or inequitable and a sale better serves the owners' interests.",
          more: [
            "Facts: the Delfinos (69%) wanted a sale. Vealencis (31%) lived and ran her business there. The court ordered partition in kind plus owelty.",
          ],
          src: "Conn. 1980",
        },

        /* ── Leases ── */
        {
          id: "lease-vs-license", topic: "Leases",
          q: "Lease vs. license or easement",
          a: "A lease transfers possession, so the tenant can exclude others. A license or easement gives only a right to use.",
          more: [
            "A tenant can eject a party crasher. A guest on a license can't.",
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
            "Unlike a trespasser, the holdover's entry was lawful. Their possession isn't hostile, so no AP clock.",
          ],
        },
        {
          id: "caveat-lessee", topic: "Leases",
          q: "Caveat lessee",
          a: "Default rule: tenant takes the premises as is. No implied warranty of fitness, and rent is owed even if the place proves unsuitable.",
          more: [
            "Parties can add an express warranty. Fraud is an exception.",
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
            "Treats a lease like a contract. Mandatory (unwaivable) in most states, mostly by statute.",
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
            "Effect: the tenant is treated as evicted, so no more rent.",
          ],
        },
        {
          id: "blackett", topic: "Leases",
          q: "What is the key takeaway of <em>Blackett v. Olanoff</em>?",
          a: "A landlord is responsible for a loud club in the same building: the noise was a natural and probable consequence, and the landlord could control it.",
          more: [
            "Facts: the landlord also leased nearby space to a disco. The club's lease had a no-noise clause.",
          ],
          src: "Mass. 1977",
        },
        {
          id: "sommer", topic: "Leases",
          q: "What is the key takeaway of <em>Sommer v. Kridel</em>?",
          a: "A landlord must make reasonable efforts to re-let after the tenant breaches, and bears the burden of proving diligence.",
          more: [
            "Facts: Kridel's wedding was cancelled and he left. The landlord waited 16 months and turned away a replacement tenant.",
          ],
          src: "N.J. 1977",
        },
        {
          id: "mitigate-scope", topic: "Leases", tag: "Sommer · scope",
          q: "Is there a duty to mitigate in residential and commercial leases?",
          a: "Residential: majority rule, yes. Commercial: generally no, partly because the tenant may be larger and richer than the landlord.",
          more: [
            "The breaching tenant pays the landlord's reasonable re-letting costs.",
          ],
        },

        /* ── Takings ── */
        {
          id: "eminent-domain", topic: "Takings",
          q: "What is eminent domain?",
          a: "The government's power to take private property without the owner's consent. Limited by due process and the takings clause.",
          more: [
            "Federal and state governments hold it. States can delegate it to localities and to utilities, railroads, and sometimes individuals.",
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
            "Fair market value caps the price, so the holdout gets market value, not the demand.",
          ],
        },
        {
          id: "taking-restrictions", topic: "Takings",
          q: "Why must the government pay for what it takes?",
          a: "Fairness (why should one owner bear the cost?) and internalizing: if it must pay, it takes only when the benefit outweighs the cost.",
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
            "Facts: a tiny number of owners held Hawaii's land and leased ground to homeowners. Owners were paid. O'Connor wrote it.",
          ],
          src: "U.S. 1984",
        },
        {
          id: "berman", topic: "Takings",
          q: "What is the key takeaway of <em>Berman v. Parker</em>?",
          a: "Condemning a blighted area, including an unblighted lot, for redevelopment partly by private parties is a valid public use.",
          more: [
            "Douglas: if D.C. decides the capital should be “beautiful as well as sanitary,” nothing in the Fifth Amendment stops it.",
          ],
          src: "U.S. 1954",
        },
        {
          id: "kelo", topic: "Takings",
          q: "What is the key takeaway of <em>Kelo v. City of New London</em>?",
          a: "A taking for private economic development is a public use if it serves a genuine public purpose under a comprehensive plan. Pretext isn't allowed.",
          more: [
            "Facts: New London took homes for a plan with Pfizer and a private developer. Kelo and Dery refused to sell.",
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
        },
        {
          id: "kelo-distinguish", topic: "Takings", tag: "Kelo · dissent",
          q: "How does O'Connor distinguish <em>Berman</em> and <em>Midkiff</em> from <em>Kelo</em>?",
          a: "Those takings eliminated an affirmative harm (blight, a land oligopoly). Kelo only sought more business.",
          more: [
            "Counter: lack of economic opportunity may be a harm too.",
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
            "Supports the federalism point: states can go beyond the federal minimum.",
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
          src: "U.S. 1943",
        },
        {
          id: "miller-loss", topic: "Takings", tag: "Miller · principle 1",
          q: "Does the government's gain from a taking affect compensation?",
          a: "No. The owner gets the value lost, even if the taker makes $100 billion.",
        },
        {
          id: "fmv", topic: "Takings", tag: "Miller · principle 2",
          q: "What is fair market value in a taking?",
          a: "The cash price a willing buyer would pay a willing seller. It's an estimate, not an exact science.",
          more: [
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
            "Large parcels are worth more per acre, so shrinking one hurts.",
          ],
        },
        {
          id: "regulatory-taking", topic: "Takings",
          q: "What is a regulatory taking?",
          a: "A regulation that goes too far is treated as a taking, so compensation is owed. Often that kills the regulation, since the government can't pay.",
          more: [
            "Same as inverse condemnation. Police power is the usual source of regulation.",
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
        },
        {
          id: "penn-coal", topic: "Takings",
          q: "What is the key takeaway of <em>Pennsylvania Coal v. Mahon</em>?",
          a: "If a regulation goes too far it's a taking. How far is a question of degree, decided ad hoc. The Kohler Act took the coal company's support right.",
          more: [
            "Facts: the coal company bought the right to mine out the support. The Act banned mining that caused residential subsidence. Holmes (majority); Brandeis (dissent).",
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
            "Strong Holmes reading makes every regulation a 100% taking. Answer: support was a separate common-law right (surface, subsurface, support).",
          ],
        },
        {
          id: "reciprocity", topic: "Takings",
          q: "Average reciprocity of advantage",
          a: "A burden is offset when everyone else is burdened the same way and you benefit from that. Points against a taking.",
          more: [
            "City life, covenants in a development. None in <em>Pennsylvania Coal</em>: the burden fell on the coal company, the benefit on residents.",
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
        },
        {
          id: "penn-central", topic: "Takings",
          q: "What is the key takeaway of <em>Penn Central v. City of New York</em>?",
          a: "New York's landmark law barring a 55-story tower atop Grand Central was not a regulatory taking. No compensation was owed.",
          more: [
            "Facts: Penn Central wanted the tower for money; the Commission rejected two plans. Context: the destruction of the old Penn Station.",
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
        },
        {
          id: "pc-denominator", topic: "Takings", tag: "Penn Central · factor 1",
          q: "What denominator does <em>Penn Central</em> use?",
          a: "The value of the whole parcel (land, station, and a skyscraper if allowed), not just the right that was blocked.",
        },
        {
          id: "pc-expectations", topic: "Takings", tag: "Penn Central · factor 2",
          q: "What counts as a “distinct investment-backed expectation”?",
          a: "A specific expectation, held when you bought, that you spent money on. Vague plans (“someday I'd build a tower”) don't count.",
          more: [
            "Here: Grand Central could still be a terminal, and a 22-story building in keeping might have been approved.",
          ],
        },
        {
          id: "pc-character", topic: "Takings", tag: "Penn Central · factor 3",
          q: "How does “character of the government action” cut?",
          a: "A physical invasion points to a taking. A regulation that adjusts the burdens and benefits of economic life for the common good, like zoning, doesn't.",
        },
        {
          id: "tdr", topic: "Takings",
          q: "Transferable development rights (TDRs)",
          a: "Landmarked owners can sell unused building height to neighbors, who may then build taller than zoning allows.",
          more: [
            "Zoning caps at 20; a landmarked 12-story building can't add 8, so it sells them. The neighbor builds 28. TDRs counted as compensation in <em>Penn Central</em>.",
          ],
        },
        {
          id: "pc-dissent", topic: "Takings",
          q: "What was Rehnquist's dissent in <em>Penn Central</em>?",
          a: "Use <em>Pennsylvania Coal</em>'s factors: no nuisance, no average reciprocity (a lone landmark), and the law transferred a servitude to the city, so it should pay.",
          more: [
            "He also argued the cost is small if spread across all New Yorkers. That failed: NYC was nearly bankrupt.",
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

        /* ── Exam method ── */
        {
          id: "word-economy", topic: "Exam method", back: "Rules",
          q: "Where should your words go?",
          more: [
            "Uncontested elements get a clause. Spend words on the contested ones.",
            "Pure conduct crimes (like evidence tampering) have no causation element. Don't analyze it.",
            "Charge the grade (murder, manslaughter, negligent homicide), not the umbrella definition of homicide.",
            "Most serious viable charge first.",
            "Never write “no available defense.” Give the best defense and explain why it fails.",
            "Raise a point, test it, conclude, then fall back. Don't conclude and then reverse.",
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
