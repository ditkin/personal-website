import { ComponentChildren } from 'preact';

export default function Accordion({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <>
      <button style={{
        background-color: '#eee',
        color: '#444',
        cursor:'pointer',
        padding:'18px',
        width: '100%',
        text-align:'left',
        border:'none',
        outline:'none',
        transition: '0.4s',
      }}>Section 1</button>
      <div class="panel">{children}</div>
    </>
  );
}
