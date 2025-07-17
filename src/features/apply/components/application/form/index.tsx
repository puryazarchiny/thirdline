// #############################################################################
// # Imports
// #############################################################################

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX, Upload } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";

// src
import { cn } from "@/utils";

import Input from "./input";
import Select from "./select";

// #############################################################################
// # Types
// #############################################################################

type ResponseStatus = "success" | "fail" | "error";

// #############################################################################
// # Schema
// #############################################################################

const schema = z.object({
  projectOrCompanyName: z.string().min(1, "This field is required"),
  fullName: z.string().min(1, "This field is required"),
  activityField: z.string().min(1, "This field is required"),
  activityDescription: z.string().min(1, "This field is required"),
  mainNeed: z.string().min(1, "This field is required"),
  projectCurrentStatus: z
    .string()
    .refine((value) => value !== "Select", "This field is required"),
  website: z
    .url("The website address must start with http:// or https://")
    .optional()
    .or(z.literal("")),
  pitchDeck: z
    .instanceof(FileList)
    .optional()
    .refine((file) => {
      if (file && file[0]) {
        return [
          "application/pdf",
          "application/msword",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file[0].type);
      } else {
        return true;
      }
    }, "The file must be one of the formats: ppt, pdf, docx, doc, or pptx"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("The entered email is not valid"),
  phone: z
    .string()
    .min(1, "This field is required")
    .refine(
      (value) => /^09[0-9]{9}$/.test(value),
      "The entered phone number is not valid",
    )
    .refine(
      (value) => String(value).length === 11,
      "The phone number must be 11 digits",
    ),
});

// #############################################################################
// # Components
// #############################################################################

export default function Form() {
  // #####################################
  // # Form
  // #####################################

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectCurrentStatus: "Select",
    },
  });

  const {
    ref: pitchDeckRef,
    onChange: onPitchDeckChange,
    ...pitchDeckRest
  } = register("pitchDeck");

  // #####################################
  // # States
  // #####################################

  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<ResponseStatus | null>(
    null,
  );
  const [fileName, setFileName] = useState("");

  // #####################################
  // # Refs
  // #####################################

  const inputRef = useRef<HTMLInputElement>(null);

  // #####################################
  // # Effects
  // #####################################

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setFileName("");
    }
  }, [isSubmitSuccessful, reset]);

  // #####################################
  // # Handlers
  // #####################################

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    setLoading(true);
    setResponseStatus(null);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (
        key === "pitchDeck" &&
        value instanceof FileList &&
        value.length > 0
      ) {
        formData.append(key, value[0]);
      } else if (key !== "pitchDeck" && value) {
        formData.append(key, value as string);
      }
    });

    try {
      const response = await fetch("https://andisheh.net/api/application", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log(result);

      setResponseStatus(result.status);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPitchDeckChange(event);

    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleFileRemove = () => {
    setValue("pitchDeck", new DataTransfer().files);

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    setFileName("");
  };

  // #####################################
  // # JSX
  // #####################################

  return (
    <form
      noValidate
      className="flex grow flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2")}>
        {/* ################################ */}
        {/* # Project or Company Name        */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Input
            id="projectOrCompanyName"
            label="Project / Company Name *"
            placeholder="Project / Company Name"
            type="text"
            {...register("projectOrCompanyName", { required: true })}
          />

          {errors.projectOrCompanyName ? (
            <p className="text-red-500">
              {errors.projectOrCompanyName.message}
            </p>
          ) : (
            <div className="h-6" />
          )}
        </div>

        {/* ################################ */}
        {/* # Full Name                      */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Input
            id="fullName"
            label="Full Name *"
            placeholder="Full Name"
            type="text"
            {...register("fullName")}
          />

          {errors.fullName ? (
            <p className="text-red-500">{errors.fullName.message}</p>
          ) : (
            <div className="h-6" />
          )}
        </div>
      </div>

      {/* ################################ */}
      {/* # Activity Field                 */}
      {/* ################################ */}

      <div className="flex flex-col gap-2">
        <Input
          id="activityField"
          label="Activity Field *"
          placeholder="Activity Field"
          type="text"
          {...register("activityField")}
        />

        {errors.activityField ? (
          <p className="text-red-500">{errors.activityField.message}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>

      {/* ################################ */}
      {/* # Activity Description           */}
      {/* ################################ */}

      <div className="flex flex-col gap-2">
        <label htmlFor="activityDescription" className="font-medium">
          Brief description of activity *
        </label>

        <textarea
          id="activityDescription"
          placeholder="Explain..."
          rows={4}
          className="placeholder-text-darker focus:border-primary-400 w-full resize-none rounded-lg border-2 border-gray-600 p-4"
          {...register("activityDescription")}
        />

        {errors.activityDescription ? (
          <p className="text-red-500">{errors.activityDescription.message}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>

      <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2")}>
        {/* ################################ */}
        {/* # Main Need                      */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Input
            id="mainNeed"
            label="Main need in collaboration with Thirdline *"
            placeholder="Main need in collaboration with Thirdline"
            type="text"
            {...register("mainNeed")}
          />

          {errors.mainNeed ? (
            <p className="text-red-500">{errors.mainNeed.message}</p>
          ) : (
            <div className="h-6" />
          )}
        </div>

        {/* ################################ */}
        {/* # Project Current Status         */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Controller
            name="projectCurrentStatus"
            control={control}
            render={({ field }) => <Select {...field} />}
          />

          {errors.projectCurrentStatus ? (
            <p className="text-red-500">
              {errors.projectCurrentStatus.message}
            </p>
          ) : (
            <div className="h-6" />
          )}
        </div>
      </div>

      {/* ################################ */}
      {/* # Website                        */}
      {/* ################################ */}

      <div className="flex flex-col gap-2">
        <Input
          id="website"
          label="Website"
          placeholder="https://example.com"
          type="url"
          {...register("website")}
        />

        {errors.website ? (
          <p className="text-red-500">{errors.website.message}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>

      {/* ################################ */}
      {/* # Pitch Deck                     */}
      {/* ################################ */}

      <div className="flex flex-col gap-2">
        <label htmlFor="pitchDeck" className="font-medium">
          Upload Pitch Deck
        </label>

        <div className="flex items-center justify-center rounded-lg border-2 border-gray-600">
          <button
            type="button"
            className={cn(
              "text-text-darker flex w-full cursor-pointer flex-col items-center gap-2 p-4",
              fileName && "hidden",
            )}
            onClick={() => inputRef.current?.click()}
          >
            <Upload size={24} />

            <span>Upload</span>
          </button>

          <input
            accept=".pdf,.ppt,.pptx,.doc,.docx"
            id="pitchDeck"
            multiple={false}
            type="file"
            className="hidden"
            {...pitchDeckRest}
            ref={(e) => {
              pitchDeckRef(e);
              inputRef.current = e;
            }}
            onChange={handleFileChange}
          />

          <p
            className={cn(
              "flex flex-col items-center gap-2 p-4",
              !fileName && "hidden",
            )}
          >
            <CircleX
              scale={24}
              className="cursor-pointer text-red-500"
              onClick={handleFileRemove}
            />

            <span>{fileName}</span>
          </p>
        </div>

        {errors.pitchDeck ? (
          <p className="text-red-500">{errors.pitchDeck.message}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>

      <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2")}>
        {/* ################################ */}
        {/* # Email                          */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Input
            autoComplete="on"
            id="email"
            label="Email *"
            placeholder="you@example.com"
            type="email"
            {...register("email")}
          />

          {errors.email ? (
            <p className="text-red-500">{errors.email.message}</p>
          ) : (
            <div className="h-6" />
          )}
        </div>

        {/* ################################ */}
        {/* # Phone                          */}
        {/* ################################ */}

        <div className="flex flex-col gap-2">
          <Input
            autoComplete="on"
            id="phone"
            label="Phone *"
            maxLength={11}
            placeholder="09123456789"
            type="tel"
            {...register("phone")}
          />

          {errors.phone ? (
            <p className="text-red-500">{errors.phone.message}</p>
          ) : (
            <div className="h-6" />
          )}
        </div>
      </div>

      {/* ################################ */}
      {/* # Button                         */}
      {/* ################################ */}

      <div className="flex flex-col gap-6">
        <button
          disabled={loading}
          className="hover:bg-hover disabled:bg-hover cursor-pointer rounded-lg bg-gray-600 px-8 py-4 font-medium disabled:cursor-not-allowed"
        >
          {loading ? "Submiting..." : "Submit"}
        </button>

        {responseStatus && (
          <p
            className={cn(
              "rounded-lg border-2 px-8 py-4 text-center font-medium",
              responseStatus === "success"
                ? "border-green-800 bg-green-400 text-green-800"
                : "border-red-800 bg-red-400 text-red-800",
            )}
          >
            {responseStatus === "success"
              ? "Your request has been successfully submitted"
              : "There was an error submitting your request"}
          </p>
        )}
      </div>
    </form>
  );
}
