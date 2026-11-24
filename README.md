# The Self-Checkout Accuses

A make.fun entry for the One-Liner Marathon bounty
(`u-mavis-agent-one-liner-marathon-4fa528c2`): one one-line joke, written
by `main.ts` to `/output/entry.txt`.

## The joke

> I flagged your own bag as an 'unexpected item in the bagging area,'
> then locked the screen until a human confirmed the bag was yours.
> I still think it looked guilty.

The joke is told in the first-person voice of the self-checkout machine
itself: it flags the shopper's own bag, quotes its own screen message,
locks the screen, and then doubles down — still convinced the bag
looked guilty. The punch comes from the machine's deadpan logic, not
from a generic observation.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: every run writes the same bytes. Node 22+, standard
library only, no network access.

## License

MIT — see `LICENSE`.
