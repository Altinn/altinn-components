import{j as o}from"./iframe-BLYnYdJi.js";import{u as h}from"./useInboxLayout-B2ih6rxh.js";import{u as j}from"./useAccountMenu-DLvfrgi6.js";import{u as c,B as g}from"./useBookmarks-0bzka8CY.js";import{L as k}from"./Layout-DwpQKWX0.js";import{P as x}from"./PageBase-RnJAzFyN.js";import{H as p}from"./Heading-BbPallRO.js";import{T as b}from"./Toolbar-CewnHVzf.js";import{B as I}from"./BookmarkModal-Dla-tb4q.js";import{u as S}from"./useProfileLayout-BJd8Rf5S.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-C8Qrw8TC.js";import"./InboxFill-DJ5M8-wl.js";import"./useId-X7maRfkh.js";import"./Plus-BP2D1YPb.js";import"./PersonCircle-osD0t2d-.js";import"./Bookmark-DwmprL4z.js";import"./Archive-CQEKpySn.js";import"./Trash-C9XX2244.js";import"./InformationSquare-OOV4URoX.js";import"./globalMenu-SyfRWbyA.js";import"./Buildings2-DxfjqMPA.js";import"./MenuGrid-DofngXnY.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-B3Y3gbI_.js";import"./useLocale-DZnOEi77.js";import"./header-C_Gbiqa6.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-H3FcMj78.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Flex-CND7PM33.js";import"./index-B87fQ9Ty.js";import"./SettingsSection-DwxW4eod.js";import"./Section-B5XykhYf.js";import"./BookmarkSettingsItem-B9VqCBvA.js";import"./QueryLabel-CvjUh3gE.js";import"./SettingsItemBase-Brvq-wHI.js";import"./ChevronUp-B2zncOUr.js";import"./ChevronDown-2Zea4dpX.js";import"./ChevronRight-BKn9ueoN.js";import"./ItemLink-nxmPLkpY.js";import"./ItemMedia-PaceHGjP.js";import"./XMark-Df3dBUtr.js";import"./Avatar-R2BW9KiJ.js";import"./Skeleton-DVFvYbaO.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./ItemControls-lA3CDM6n.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-CnODk9AP.js";import"./useHighlightedText-omqdYwyr.js";import"./ContextMenu-B4pAtZpC.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Dropdown-B_CqShRd.js";import"./MenuElipsisHorizontal-CLaaCIK6.js";import"./SearchField-BrbRKSJg.js";import"./FieldBase-CvSJrP7q.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./Checkmark-DfNuFQY9.js";import"./useMenu-DImJoMjP.js";import"./List-DoiYd3aY.js";import"./ListItem-Bj5rSe3Q.js";import"./Divider-D3w2CTq8.js";import"./Pencil-BoAUko9v.js";import"./SkipLink-xYEyUiMN.js";import"./Banner-S7BmrX51.js";import"./GlobalHeader-DbSCgnog.js";import"./useIsDesktop-Bj1AMvX0.js";import"./GlobalAccountButton-D4kgT2nn.js";import"./Enter-v6RvFZ3i.js";import"./GlobalMenuButton-CMkoCf-z.js";import"./MenuHamburger-C7T2DwIu.js";import"./AccountSelector-6_TLy5eI.js";import"./heading-BECUkATt.js";import"./AccountMenu-BDV5Y0Z5.js";import"./Switch-B7L3DRqE.js";import"./GlobalMenu-DDUT5luW.js";import"./ArrowUndo-nSuILEr9.js";import"./Globe-DWIPGG6q.js";import"./BreadcrumbsLink-D9gY_2H_.js";import"./ArrowRight-C7Lk-vhQ.js";import"./Footer-CtxgjrB5.js";import"./ChevronUpDown-Bi5y66ZT.js";import"./ButtonGroup-CEDbAWnm.js";import"./ButtonGroupDivider-CvTb59sy.js";import"./ToolbarMenu-2H_l_H82.js";import"./ToolbarSearch-Cwhqz22J.js";import"./SettingsModal-DLblaO99.js";import"./ModalBody-BORqoVqO.js";import"./ButtonIcon-B3x5IOfQ.js";import"./ButtonLabel-DtaexAPQ.js";import"./TextField-B__OpzqJ.js";import"./Bell-Cb-YtyNE.js";import"./ClockDashed-DbsDanPS.js";const ye={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:i}=j({includeGroups:!0}),{expandedId:r,onClose:s,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:i?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:s,buttons:[{label:"Lagre",onClick:()=>s()},{label:"Slett",variant:"outline",onClick:()=>s()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Pe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Pe as __namedExportsOrder,ye as default};
