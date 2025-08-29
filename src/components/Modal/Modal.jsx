import { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Modal.scss";

export default function CallbackModal({ open, onClose }) {
  const nameRef = useRef(null);

  // Закрытие по ESC и фокус в поле Имя
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) {
      window.addEventListener("keydown", onKey);
      setTimeout(() => nameRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  // Валидация
  const Schema = Yup.object({
    name: Yup.string()
      .trim()
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє' -]{2,40}$/u, "Вкажіть коректне ім’я (2–40 символів)")
      .required("Обов’язкове поле"),
    phone: Yup.string()
      .required("Обов’язкове поле")
      .test("is-valid-ua-phone", "Вкажіть коректний номер", (value) => {
        const digits = (value || "").replace(/\D/g, "");
        // приймаємо +380XXXXXXXXX або 0XXXXXXXXX
        if (digits.startsWith("380") && digits.length === 12) return true;
        if (digits.startsWith("0") && digits.length === 10) return true;
        return false;
      }),
    time: Yup.string().trim().max(60, "Занадто довге значення"),
  });

  // Нормалізація телефону під надсилання
  const normalizePhone = (v) => {
    const d = v.replace(/\D/g, "");
    if (d.startsWith("0") && d.length === 10) return `+38${d}`;  // 0XXXXXXXXX -> +380XXXXXXXXX
    if (d.startsWith("380") && d.length === 12) return `+${d}`;
    return v;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    const payload = {
      ...values,
      phone: normalizePhone(values.phone),
    };
    try {
      // TODO: підключи свій бекенд
      // const res = await fetch("/send.php", { method: "POST", body: new URLSearchParams(payload) });
      // if (!res.ok) throw new Error("Network");
      await new Promise((r) => setTimeout(r, 600)); // імітація
      setStatus({ ok: true });
      resetForm();
      // закрити через паузу, якщо хочеш:
      // setTimeout(onClose, 1000);
    } catch {
      setStatus({ ok: false, err: "Помилка відправки. Спробуйте ще раз." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* оверлей з блюром під модалкою */}
      <div className="cb-overlay" onClick={onClose} />

     <div className="cb-wrap" role="dialog" aria-modal="true" aria-labelledby="cb-title">
  <div className="cb-modal">
    <button className="cb-close" onClick={onClose} aria-label="Закрити">×</button>
        <h2 id="cb-title" className="cb-title">Зворотній дзвінок</h2>
        <p className="cb-sub">Залиште контакти — ми передзвонимо.</p>

        <Formik
  initialValues={{ name: "", phone: "", time: "" }}
  validationSchema={Schema}
  onSubmit={handleSubmit}
>
  {({ isSubmitting, status }) => (
    <Form className="cb-form" noValidate>
      {/* Ім’я */}
      <Field name="name">
        {({ field, meta }) => (
          <label className={`cb-field ${meta.touched && meta.error ? "has-error" : ""}`}>
            <span>Ім’я</span>
            <input
              {...field}
              ref={nameRef}
              type="text"
              placeholder="Ваше ім’я"
              autoComplete="name"
              aria-invalid={meta.touched && !!meta.error}
              aria-describedby="err-name"
            />
            <div id="err-name" className="cb-err">
              {meta.touched && meta.error ? meta.error : ""}
            </div>
          </label>
        )}
      </Field>

      {/* Телефон */}
      <Field name="phone">
        {({ field, meta }) => (
          <label className={`cb-field ${meta.touched && meta.error ? "has-error" : ""}`}>
            <span>Телефон</span>
            <input
              {...field}
              type="tel"
              inputMode="tel"
              placeholder="+380 XX XXX XX XX або 0XXXXXXXXX"
              aria-invalid={meta.touched && !!meta.error}
              aria-describedby="err-phone"
            />
            <div id="err-phone" className="cb-err">
              {meta.touched && meta.error ? meta.error : ""}
            </div>
          </label>
        )}
      </Field>

      {/* Зручний час (необов’язково) */}
      <Field name="time">
        {({ field, meta }) => (
          <label className={`cb-field ${meta.touched && meta.error ? "has-error" : ""}`}>
            <span>Зручний час (необов’язково)</span>
            <input
              {...field}
              type="text"
              placeholder="Напр., сьогодні 16:00–18:00"
              aria-invalid={meta.touched && !!meta.error}
              aria-describedby="err-time"
            />
            <div id="err-time" className="cb-err">
              {meta.touched && meta.error ? meta.error : ""}
            </div>
          </label>
        )}
      </Field>

      {status?.ok && <div className="cb-success">Дякуємо! Ми з вами зв’яжемося.</div>}
      {status?.err && <div className="cb-error">{status.err}</div>}

      <button className="cb-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Відправляємо…" : "Замовити дзвінок"}
      </button>
    </Form>
  )}
</Formik>

          </div>
      </div>
    </>
  );
}
