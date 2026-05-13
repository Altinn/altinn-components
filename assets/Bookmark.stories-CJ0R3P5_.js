import{j as o}from"./iframe-aW2Ivac6.js";import{u as h}from"./useInboxLayout-BKUYTWkb.js";import{u as j}from"./useAccountMenu-B9zr0vSq.js";import{u as c,B as g}from"./useBookmarks-DsWOMvKj.js";import{L as k}from"./Layout-DrkwdCYs.js";import{P as x}from"./PageBase-DODSeyqi.js";import{H as p}from"./Heading-D9dg30ti.js";import{T as b}from"./Toolbar-Dh5S6ybd.js";import{B as I}from"./BookmarkModal-B9VObRun.js";import{u as S}from"./useProfileLayout-BlC18q7o.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-xR7lNIJC.js";import"./InboxFill-qs4ohqzK.js";import"./useId-DH4aqM3h.js";import"./Plus-Cg6CWYTT.js";import"./PersonCircle-DPRH_llS.js";import"./Bookmark-CFgUuPha.js";import"./Archive-aCPoIJqz.js";import"./Trash-C236s4up.js";import"./InformationSquare-BtbGMdWt.js";import"./globalMenu-Dz4DXw-z.js";import"./Buildings2-D1hlYQo9.js";import"./MenuGrid-rA8vibJs.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-Cg2n-zHu.js";import"./useLocale-C9HjZW-J.js";import"./header-BfCnMbnj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-DuQrzvmx.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-X5QX7qeT.js";import"./QueryLabel-XalgUo1y.js";import"./SettingsItemBase-CJB5-OJo.js";import"./ChevronUp-Cb22o5aT.js";import"./ChevronDown-B1Tnrqm5.js";import"./ChevronRight-Bcq_DMzy.js";import"./ItemLink-BWqCuyi6.js";import"./index-DWa6FdCb.js";import"./ItemMedia-D2IPLDQS.js";import"./XMark-DUdkEKb2.js";import"./Avatar-C-j1g9mt.js";import"./Skeleton-it7stJ0Q.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./ItemControls-BfAmDR5q.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-JHHWywcS.js";import"./useHighlightedText-ZQImmj57.js";import"./ContextMenu-CG5GStLp.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Dropdown-BOvlApQ8.js";import"./MenuElipsisHorizontal-DY0_PRao.js";import"./SearchField-uUwTRA3v.js";import"./FieldBase-CdSvcvFX.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./Checkmark-BjMWNebU.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./Pencil-DsLeHOVK.js";import"./SkipLink-Bn_vSWU3.js";import"./Banner-8CVvg8HE.js";import"./GlobalHeader-Nq92m6iw.js";import"./useIsDesktop-BJdF2eFD.js";import"./GlobalAccountButton-umDbm3Xt.js";import"./Enter-BUtIy1kW.js";import"./GlobalMenuButton-CNxrmuou.js";import"./MenuHamburger-5ynA6oKg.js";import"./AccountSelector-CaMR5UnS.js";import"./heading-CgRl8HZA.js";import"./AccountMenu-BtfjiIyK.js";import"./Switch-T1wAkZbR.js";import"./GlobalMenu-BlHoO1Ht.js";import"./ArrowUndo-BdzRHxUS.js";import"./Globe-B2KtByVs.js";import"./BreadcrumbsLink-V8iO21Ls.js";import"./ArrowRight-DG3uu7SN.js";import"./Footer-DX_UAj2b.js";import"./Flex-CJSQwJ4K.js";import"./ChevronUpDown-BuexUABI.js";import"./ButtonGroup-BjSwpoTC.js";import"./ButtonGroupDivider-E_lmL3bb.js";import"./ToolbarMenu-KjkIcEDa.js";import"./ToolbarSearch-CiWeS0rY.js";import"./SettingsModal-Dm03By8e.js";import"./ModalBody-_o4wF_hP.js";import"./Section-BsfLh2yG.js";import"./ButtonIcon-CYRzucye.js";import"./ButtonLabel-DF873RLr.js";import"./TextField-D-EqANfy.js";import"./Bell-DmB39Dyn.js";import"./ClockDashed-BPscwdUq.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const fe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,fe as __namedExportsOrder,Se as default};
