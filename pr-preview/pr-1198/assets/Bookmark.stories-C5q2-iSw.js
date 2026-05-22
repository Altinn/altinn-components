import{j as o}from"./iframe-CbC-fLaY.js";import{u as h}from"./useInboxLayout-JqZjHcLb.js";import{u as j}from"./useAccountMenu--4_Dk7tP.js";import{u as c,B as g}from"./useBookmarks-Cnu8IgWh.js";import{L as k}from"./Layout-BdCm5cXO.js";import{P as x}from"./PageBase-BOk6Z0zM.js";import{H as p}from"./Heading-Bl7p7Gle.js";import{T as b}from"./Toolbar-CFq1284o.js";import{B as I}from"./BookmarkModal-CTivfUc0.js";import{u as S}from"./useProfileLayout-B9AiUr1P.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-DCpj0Gvl.js";import"./InboxFill-BGQmVAC5.js";import"./useId-C2JQsT24.js";import"./Plus-BGo0JvDh.js";import"./PersonCircle-De3VEI5u.js";import"./Bookmark-BnMrkDUU.js";import"./Archive-DZm8Lj52.js";import"./Trash-oVpQevMD.js";import"./InformationSquare-CQq7uvJQ.js";import"./globalMenu-DaLxtLwP.js";import"./Buildings2-BODn5oQY.js";import"./MenuGrid-CBHgYnvP.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-Dcr4WGRd.js";import"./useLocale-CBk_fCN-.js";import"./header-CIBYcI_N.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-BeQXSG1V.js";import"./Button-B0m1rUs2.js";import"./tooltip-BtbQ4KG6.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BJvIxsRb.js";import"./QueryLabel-Cz6UbTUf.js";import"./SettingsItemBase-CPLBMCbD.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";import"./ItemLink-BLkR3G3D.js";import"./index-Ds9VDGIC.js";import"./ItemMedia-CsSXB_1W.js";import"./XMark-DvUzU3_h.js";import"./Avatar-CmrLTlqi.js";import"./Skeleton-D8kEQByH.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./ItemControls-gQT1qCQ5.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./Typography-BWnrNFau.js";import"./useHighlightedText-BssbQrxH.js";import"./ContextMenu-CmXEuRA_.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Dropdown-5e6GLlMG.js";import"./MenuElipsisHorizontal-DpFkC9Cn.js";import"./SearchField-yE8KzlZV.js";import"./FieldBase-D2jwyGQb.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./Checkmark-8GuDUS8U.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./Pencil-bm6Xpz6u.js";import"./SkipLink-BVkfINao.js";import"./Banner-CFYJclR7.js";import"./GlobalHeader-C7O3_g0x.js";import"./useIsDesktop-Cd7k0tdp.js";import"./GlobalAccountButton-DzvhWJtE.js";import"./Enter-BnEF64HE.js";import"./GlobalMenuButton-C74EDIuz.js";import"./MenuHamburger-CSe5Jiwx.js";import"./AccountSelector-DS9IofOb.js";import"./AccountMenu-xmO_qzm_.js";import"./Switch-Bt1XFAG8.js";import"./GlobalMenu-DB4GaB4x.js";import"./ArrowUndo-CJcERi05.js";import"./Globe-E90sEq1m.js";import"./BreadcrumbsLink-Bs-avobN.js";import"./ArrowRight-CbPqeL4d.js";import"./Footer-DJQhp-mw.js";import"./Flex-DahTG4Th.js";import"./ChevronUpDown-r1RoSoyE.js";import"./ButtonGroup-BE0BnYMw.js";import"./ButtonGroupDivider-Bt-Y-uw7.js";import"./ToolbarMenu-DpWlAcTs.js";import"./ToolbarSearch-BzaPO5IS.js";import"./SettingsModal-CMK7iPDJ.js";import"./ModalBody-Ce5L1hlw.js";import"./Section-DypEBfCX.js";import"./ButtonIcon-DWUAaYBn.js";import"./ButtonLabel-D9GeETuC.js";import"./TextField-hBfv-7w0.js";import"./Bell-CTzeWleD.js";import"./ClockDashed-B4aZfU4M.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
