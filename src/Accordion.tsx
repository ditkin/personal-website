import { ComponentChildren } from 'preact';

export default function Accordion({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: '#eee',
          color: '#444',
          cursor: 'pointer',
          padding: '18px',
          width: '100%',
          textAlign: 'left',
          border: 'none',
          outline: 'none',
          transition: '0.4s',
        }}
      >
        Section 1
      </button>
      <div class="panel">{children}</div>
    </>
  );
}
