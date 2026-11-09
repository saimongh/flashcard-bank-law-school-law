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
          id: "factual-cause", topic: "Unintentional", tag: "Negligence · causation", back: "Tests",
          q: "Factual cause",
          elements: [
            "But-for test — the default: without D's breach, would the harm have happened? If not, D is a factual cause",
            "Substantial factor — multiple causes, each enough on its own (two fires merge and burn P's house). Each is a cause even though neither is but-for",
            "Alternative
