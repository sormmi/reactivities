using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _dataContext.Activities.FindAsync(request.Id);
                
                if (activity == null) throw new Exception("Activity not found");

                _dataContext.Activities.Remove(activity);
                
                var success = await _dataContext.SaveChangesAsync(cancellationToken) > 0;

                if (!success) throw new Exception("Error occured while saving changes");
                
                return Unit.Value;
            }
        }
    }
}