-- RehearsalsAI Waitlist Table
-- Migration: 20241228_create_waitlist

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    vertical TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ,
    notes TEXT,
    contacted BOOLEAN DEFAULT FALSE,
    converted BOOLEAN DEFAULT FALSE
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Create index for filtering by vertical
CREATE INDEX IF NOT EXISTS idx_waitlist_vertical ON public.waitlist(vertical);

-- Create index for filtering by created date
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to manage all entries
CREATE POLICY "Service role can manage waitlist" ON public.waitlist
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Comment on table
COMMENT ON TABLE public.waitlist IS 'RehearsalsAI waitlist signups for various vertical platforms';
COMMENT ON COLUMN public.waitlist.vertical IS 'The *Ready platform the user is interested in (e.g., RaiseReady, SalesReady, PartReady)';
COMMENT ON COLUMN public.waitlist.contacted IS 'Whether the user has been contacted about their interest';
COMMENT ON COLUMN public.waitlist.converted IS 'Whether the user has converted to an active user';
