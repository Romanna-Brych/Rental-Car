'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="errorWrapper">
      <h2>Something went wrong!</h2>

      <button onClick={() => reset()} className="errorBtn">
        Try again
      </button>
    </div>
  );
}
