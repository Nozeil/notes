interface Props {
  value: string;
}

export function SubmitButton({ value }: Props) {
  return <input type="submit" value={value} />;
}
