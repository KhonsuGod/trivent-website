import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { buildWhatsappUrl, company, interestOptions } from '../data/company';
import type { InquiryPayload } from '../data/company';

const initialForm: InquiryPayload = {
  name: '',
  organization: '',
  position: '',
  interest: interestOptions[0],
  message: '',
};

/** Lightweight inquiry flow salvaged from the archived baseline: no backend,
 *  the form composes a WhatsApp message (or email) on the official channels.
 *  Nothing is stored; no booking is pretended. */
export function ContactForm() {
  const [form, setForm] = useState<InquiryPayload>(initialForm);
  const [status, setStatus] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('TRIVENT transformation conversation');
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nPosition: ${form.position}\nInterest: ${form.interest}\n\n${form.message}`,
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateField(field: keyof InquiryPayload, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = (Object.keys(form) as (keyof InquiryPayload)[]).find(
      (key) => !form[key].trim(),
    );
    if (missing) {
      setStatus('Please complete all fields before continuing to WhatsApp.');
      return;
    }
    setStatus('Opening WhatsApp with your message. No data is stored on this website.');
    window.open(buildWhatsappUrl(form), '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="form-frame">
      <span className="frame-label">Inquiry Form</span>
      <form className="form-grid" onSubmit={submitForm} noValidate>
        <label>
          Full name
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
          />
        </label>
        <label>
          Organization
          <input
            name="organization"
            autoComplete="organization"
            value={form.organization}
            onChange={(event) => updateField('organization', event.target.value)}
            required
          />
        </label>
        <label>
          Position
          <input
            name="position"
            autoComplete="organization-title"
            value={form.position}
            onChange={(event) => updateField('position', event.target.value)}
            required
          />
        </label>
        <label>
          Area of interest
          <select
            name="interest"
            value={form.interest}
            onChange={(event) => updateField('interest', event.target.value)}
            required
          >
            {interestOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          What should we discuss?
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            required
          />
        </label>
        <div className="form-actions">
          <button className="btn btn-gold" type="submit">
            Continue via WhatsApp <ArrowUpRight aria-hidden="true" />
          </button>
          <a className="btn btn-ghost" href={mailto}>
            Email instead
          </a>
        </div>
        <p className="form-status" role="status">
          {status || 'Your input stays in this browser and is only used to compose the message.'}
        </p>
      </form>
    </div>
  );
}
