using System.Linq;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Basket, BasketDto>()
            .ForMember(dest => dest.BuyerId, opt => opt.MapFrom(src => src.BuyerId))
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items.Select(item => new BasketItemDto
            {
                Brand = item.Product.Brand,
                Name = item.Product.Name,
                PictureUrl = item.Product.PictureUrl,
                Price = item.Product.Price,
                ProductId = item.Product.Id,
                Quantity = item.Quantity,
                Type = item.Product.Type
            }).ToList())).ReverseMap();
        }
    }
}