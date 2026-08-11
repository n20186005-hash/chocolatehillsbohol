#!/usr/bin/env python3
"""Download Chocolate Hills Bohol photos via LoremFlickr → live.staticflickr."""

import os, sys, time, urllib.request, urllib.error

SEARCHES = [
    "chocolatehills,bohol,philippines",
    "chocolate+hills,landscape",
    "bohol,philippines,nature",
    "chocolatehills,viewpoint",
    "bohol,hills,scenic",
    "chocolate,hills,bohol",
    "bohol,island,vista",
    "chocolate+hills,panorama",
    "bohol,philippines,travel",
    "chocolatehills,sunrise",
    "bohol,carmen,landmark",
    "chocolate+hills,green",
]

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "gallery")
os.makedirs(OUT_DIR, exist_ok=True)

def download_one(idx: int, tags: str) -> bool:
    fname = f"chocolate-hills-{idx}.jpg"
    path = os.path.join(OUT_DIR, fname)
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        print(f"  [{idx}] {fname} already exists ({os.path.getsize(path)} bytes), skip")
        return True
    url = f"https://loremflickr.com/1200/800/{tags}?random={int(time.time()) + idx}"
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            if len(data) < 3000:
                print(f"  [{idx}] too small ({len(data)} bytes), retry...")
                time.sleep(2)
                continue
            with open(path, "wb") as f:
                f.write(data)
            print(f"  [{idx}] {fname}  {len(data)} bytes  OK")
            return True
        except Exception as e:
            print(f"  [{idx}] attempt {attempt+1} failed: {e}")
            time.sleep(2)
    return False

def main():
    print(f"Downloading {len(SEARCHES)} photos to {OUT_DIR} ...")
    ok = 0
    for i, tags in enumerate(SEARCHES, 1):
        if download_one(i, tags):
            ok += 1
        time.sleep(1)
    print(f"\nDone: {ok}/{len(SEARCHES)} photos downloaded.")

if __name__ == "__main__":
    main()
