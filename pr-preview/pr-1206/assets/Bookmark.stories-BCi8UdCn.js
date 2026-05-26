import{j as o}from"./iframe-CdkbiINU.js";import{u as h}from"./useInboxLayout-DMTObCvO.js";import{u as j}from"./useAccountMenu-RyIUwxtk.js";import{u as c,B as g}from"./useBookmarks-CZbOEUO9.js";import{L as k}from"./Layout-LN12fKls.js";import{P as x}from"./PageBase-Da9eaYxe.js";import{H as p}from"./Heading-pV_B_Yzg.js";import{T as b}from"./Toolbar-FEoFjgSu.js";import{B as I}from"./BookmarkModal-Dtpdl9ww.js";import{u as S}from"./useProfileLayout-y-XjK-nr.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-WN1OuNG7.js";import"./InboxFill-DVVOb2iZ.js";import"./useId-BBNwfwR-.js";import"./Plus-BlZ2V0ro.js";import"./PersonCircle-LFFErccD.js";import"./Bookmark-DvWCxKLU.js";import"./Archive-5hJJ1NJt.js";import"./Trash-D4pY1Rc-.js";import"./InformationSquare-lXhFqiHS.js";import"./globalMenu-tgsqT7sD.js";import"./Buildings2-B6DX2ZbA.js";import"./MenuGrid-CY0Q_UsS.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DgFkx46j.js";import"./useLocale-D3mY-h9s.js";import"./header-C6PCT9u1.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-vVx3GXlt.js";import"./Button-DbqBa2Ra.js";import"./tooltip-ClrKYCC2.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-ImyOC9dQ.js";import"./QueryLabel-CY4lm9Jd.js";import"./SettingsItemBase-zrEv8Gr_.js";import"./ChevronUp-zAhIBGoC.js";import"./ChevronDown-DqPtLl_G.js";import"./ChevronRight-WcqCaCSB.js";import"./ItemLink-uRj7Y6jT.js";import"./index-ClUlC5r_.js";import"./ItemMedia-Mj1KUH0F.js";import"./XMark-CXTea0I2.js";import"./Avatar-Dqj4y4ce.js";import"./Skeleton-DNrLKFK9.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./ItemControls-2WNlOUKw.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./Typography-CbNgqrog.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ContextMenu-DKrW1DIT.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Dropdown-B3ZWUXYU.js";import"./MenuElipsisHorizontal-Drry6q8X.js";import"./SearchField-D9zkHyRI.js";import"./FieldBase-CADFK9ds.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./Checkmark-B8HStk1Z.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./Pencil-D7lUFaES.js";import"./SkipLink-CML0sBUI.js";import"./Banner-BBhGqGPx.js";import"./GlobalHeader-Drip1D80.js";import"./useIsDesktop-BeFJPxgu.js";import"./GlobalAccountButton-PpS-HXEW.js";import"./Enter-DES-VDJ8.js";import"./GlobalMenuButton-B1CAeQET.js";import"./MenuHamburger-CYCqXYse.js";import"./AccountSelector-C2kSlN_v.js";import"./AccountMenu-eWReyBQ6.js";import"./Switch-Cw7IuUMn.js";import"./GlobalMenu-C_l3UvsO.js";import"./ArrowUndo-C2yeCY3h.js";import"./Globe-fe3HaoO0.js";import"./BreadcrumbsLink-tOvioorb.js";import"./ArrowRight-D3UAGOAj.js";import"./Footer-CUB00Xkk.js";import"./Flex-B60SO79o.js";import"./ChevronUpDown-B4AZ7UWd.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonGroupDivider-Buidn4Ls.js";import"./ToolbarMenu-Bc9cebGQ.js";import"./ToolbarSearch-DGxkCR-N.js";import"./SettingsModal-p1UGJMFY.js";import"./ModalBody-B1FGT2pR.js";import"./Section-CxpgG4VY.js";import"./ButtonIcon-CyqeVLbn.js";import"./ButtonLabel-BTmVkbIz.js";import"./TextField-B9cNHav0.js";import"./Bell-rY58_Vrj.js";import"./ClockDashed-Da5zW20o.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
