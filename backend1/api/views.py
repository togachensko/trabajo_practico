# Create your views here.

from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import CartItem

from api.serializer import CartItemSerializer, CartItemgetSerializer, ProductSerializer2

from api.models import Product, Comment
from api.serializer import ProductSerializer, RegisterSerializer, MeSerializer, \
    CommentSerializer, CommentUserSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update', 'get']:
            return ProductSerializer
        return ProductSerializer2

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(ProductViewSet, self).get_permissions()

     # Filtro
    # def get_queryset(self):
    #     queryset = self.queryset
    #    id = self.request.query_params.get('id')
    #   if id is not None:
    #      queryset = queryset.filter(id=id)
    # return queryset


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = MeSerializer(request.user)
    return Response(data=serializer.data, status=200)


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CartItemSerializer
        return CartItemgetSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CommentSerializer
        return CommentUserSerializer
