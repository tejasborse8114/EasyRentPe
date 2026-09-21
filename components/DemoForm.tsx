"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const demoFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  propertyName: z.string().min(2, "Please enter your property name"),
  numberOfBeds: z.coerce
    .number({ invalid_type_error: "Please enter the number of beds" })
    .int("Please enter a whole number")
    .positive("Number of beds must be greater than 0"),
  propertyType: z.enum(["hostel", "pg"], {
    errorMap: () => ({ message: "Please select a property type" }),
  }),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: { propertyType: "hostel" },
  });

  // Placeholder submit handler — wire this up to a real backend/CRM endpoint later.
  const onSubmit = async (data: DemoFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Demo request submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-bold text-ink">Thanks! Our team will reach out within one business day.</h3>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="propertyName" className="block text-sm font-medium text-ink">
            Property name
          </label>
          <input
            id="propertyName"
            type="text"
            aria-invalid={!!errors.propertyName}
            aria-describedby={errors.propertyName ? "propertyName-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("propertyName")}
          />
          {errors.propertyName && (
            <p id="propertyName-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.propertyName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="numberOfBeds" className="block text-sm font-medium text-ink">
            Number of beds
          </label>
          <input
            id="numberOfBeds"
            type="number"
            min={1}
            aria-invalid={!!errors.numberOfBeds}
            aria-describedby={errors.numberOfBeds ? "numberOfBeds-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("numberOfBeds")}
          />
          {errors.numberOfBeds && (
            <p id="numberOfBeds-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.numberOfBeds.message}
            </p>
          )}
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-ink">Property type</legend>
        <div className="mt-1.5 flex gap-4">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="hostel" className="h-4 w-4 text-primary" {...register("propertyType")} />
            Hostel
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="pg" className="h-4 w-4 text-primary" {...register("propertyType")} />
            PG
          </label>
        </div>
        {errors.propertyType && (
          <p role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.propertyType.message}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="text-ink-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-surface-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...register("message")}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Request a Demo
      </button>
    </form>
  );
}
