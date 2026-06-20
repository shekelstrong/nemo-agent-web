import { BrandStrip as BaseBrandStrip, RU_BRANDS } from '../../components/BrandStrip'

export default function BrandStrip() {
  return (
    <BaseBrandStrip
      title="ИИ-агент уже помогает"
      brands={RU_BRANDS}
      size="md"
      speed={40}
      theme="dark"
    />
  )
}
